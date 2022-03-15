import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment'; 
import { MarchDashboardComponent } from './march-dashboard/march-dashboard.component';

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.scss']
})
export class MarchComponent implements OnInit {

  private readonly APIKEY = environment.NasaApiKey;
  
  @ViewChild(MarchDashboardComponent) dashboardChild: MarchDashboardComponent;

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectionChanged(){
    this.dashboardChild.getBackgroundImage();
  }
}
