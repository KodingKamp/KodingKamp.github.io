import { Component, OnInit } from '@angular/core';
import { MarchService } from 'src/app/services/march.service';

@Component({
  selector: 'app-march-settings',
  templateUrl: './march-settings.component.html',
  styleUrls: ['./march-settings.component.scss']
})
export class MarchSettingsComponent implements OnInit {
  private _dates = [];
  private _cacheKey = "march-background-img-url";

  // exposed variabled
  APODStatus: string = "NotLoaded";
  APODList = [];
  selectedDateData = null;

  constructor(
    private _marchService: MarchService,
  ) { }

  ngOnInit(): void {
    this.initializeDates();
    this.getLast7DaysImages();
  }

  initializeDates(): void {
    const dayInMilliseconds = 86400000,
      today = new Date();

    for (let daysAgo = 6; daysAgo >= 0; daysAgo--) {
      this._dates.push(
        this.convertToDateString(
          new Date( today.getTime() - (daysAgo * dayInMilliseconds) )
        )
      );
    }
  }

  getLast7DaysImages(): void {
    this.APODStatus = "Pending";
    this._marchService.getPicturesForLast7Days(this._dates[0], this._dates[6])
      .subscribe((response) => {
        let responseDTO = response.map(APOD => {
          return {
            ...APOD,
            isImage: !APOD.url.includes('youtube.com')
          }
        });
        this.selectedDateData = responseDTO[6];
        this.APODList = responseDTO;
        this.APODStatus = "Loaded";
      },
      (error) => {
        this.APODStatus = "Error";
      });
  }

  convertToDateString(date: Date): string {
    const [
      year, 
      month, 
      day
    ] = [
      date.getFullYear(), 
      date.getMonth(), 
      date.getDate()
    ];
    
    return `${year}-${month}-${day}`;
  }

  selectedDay(dateData) {
    this.selectedDateData = dateData;
  }

  saveSelected() {
    if (this.selectedDateData.isImage)
      localStorage.setItem(this._cacheKey, this.selectedDateData.url);
  }

  clearSelected() {
    localStorage.removeItem(this._cacheKey);
  }
}
