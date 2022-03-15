import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';

import { MarchComponent } from './march.component';
import { MarchDashboardComponent } from './march-dashboard/march-dashboard.component';
import { MarchSettingsComponent } from './march-settings/march-settings.component';

@NgModule({
  declarations: [
    MarchComponent,
    MarchDashboardComponent,
    MarchSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ]
})
export class MarchModule { }
