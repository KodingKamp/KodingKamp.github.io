import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.scss']
})
export class MarchComponent implements OnInit {

  private readonly APIKEY = environment.NasaApiKey;
  
  constructor() { }

  ngOnInit(): void {
  }
}
