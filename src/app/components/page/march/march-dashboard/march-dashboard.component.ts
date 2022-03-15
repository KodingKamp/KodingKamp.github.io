import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarchService } from 'src/app/services/march.service';

@Component({
  selector: 'app-march-dashboard',
  templateUrl: './march-dashboard.component.html',
  styleUrls: ['./march-dashboard.component.scss']
})
export class MarchDashboardComponent implements OnInit {
  @ViewChild('dashboardContainer') dashboardContainer;

  // exposed variables
  backgroundImageUrl = null;
  isBackgroundLoaded = false;
  searchInput = "";
  
  constructor(
    private _marchService: MarchService,
  ) {}

  ngOnInit(): void {
    this.getBackgroundImage();
  }
  
  getBackgroundImage(): void {
    this.backgroundImageUrl = localStorage.getItem('march-background-img-url');
    this.isBackgroundLoaded = this.backgroundImageUrl !== null;
  }

  submitSearch(): void {
    if (this.searchInput === "")
      return;

    this._marchService.submitSearch(this.searchInput);
    this.searchInput = "";
  }

}
