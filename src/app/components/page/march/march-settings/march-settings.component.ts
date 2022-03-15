import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NasaAPODResponse } from 'src/app/models/march/nasa-apodresponse';
import { MarchService } from 'src/app/services/march.service';

@Component({
  selector: 'app-march-settings',
  templateUrl: './march-settings.component.html',
  styleUrls: ['./march-settings.component.scss']
})
export class MarchSettingsComponent implements OnInit {
  @Output() changedSelectionEvent = new EventEmitter();

  private _dates = [];
  private _startDate;
  private _endDate;
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
    const dayInMilliseconds = 86400000;
    let today = new Date();
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)

    this._endDate = this.convertToDateString(today);
    this._startDate = this.convertToDateString(new Date(today.getTime() - (dayInMilliseconds * 6)));
  }

  getLast7DaysImages(): void {
    this.APODStatus = "Pending";
    this._marchService.getPicturesForLast7Days(this._startDate, this._endDate)
      .subscribe((response) => {
        let responseDTO = response.map(APOD => {
          return {
            ...APOD,
            isImage: !APOD.url.includes('youtube.com')
          }
        });

        let itemCount = responseDTO.length;
        if (itemCount > 7)
          responseDTO.shift();

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
    if (this.selectedDateData.isImage) {
      localStorage.setItem(this._cacheKey, this.selectedDateData.url);
      this.changedSelectionEvent.emit();
    }
  }

  clearSelected() {
    localStorage.removeItem(this._cacheKey);
    this.changedSelectionEvent.emit();
  }
}
