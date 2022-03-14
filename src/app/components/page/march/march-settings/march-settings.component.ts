import { Component,
  OnInit } from '@angular/core';
import { MarchService } from 'src/app/services/march.service';

@Component({
  selector: 'app-march-settings',
    templateUrl: './march-settings.component.html',
  styleUrls: ['./march-settings.component.scss']
})
export class MarchSettingsComponent implements OnInit {
  todaysPOD: Object;  

  // exposed variabled
  APODList = [];

  constructor(
    private _marchService: MarchService,
  ) { }

  ngOnInit(): void {
    this.todaysPOD = {
      date: new Date(),
      url: "",
      title: "",
      explaination: ""
    };
    
    this.getLast7DaysImages();
  }

  getLast7DaysImages(): void {
    this._marchService.getPictureOfTheDay()
      .subscribe((data) => {
        this.todaysPOD = data;
        this.APODList = [
          {date: "3/08/22", url: "6 days ago's image"},
          {date: "3/09/22", url: "5 days ago's image"},
          {date: "3/10/22", url: "4 days ago's image"},
          {date: "3/11/22", url: "3 days ago's image"},
          {date: "3/12/22", url: "2 days ago's image"},
          {date: "3/13/22", url: "yesterday"},
          this.todaysPOD
        ]
      });

    
  }

}
