import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NasaAPODResponse } from '../models/march/nasa-apodresponse';

@Injectable({
  providedIn: 'root'
})
export class MarchService {
  private readonly searchUrl = "https://www.google.com/search";
  private readonly nasaAPODUrl = "https://api.nasa.gov/planetary/apod";

  constructor(
    private http: HttpClient,
  ) {}

  submitSearch(searchInput: string): void {
    let searchQuery = `${this.searchUrl}?q=${searchInput}`;
    location.href = searchQuery;
  }

  getPictureOfTheDay(): Observable<NasaAPODResponse> {
    let query = this.nasaAPODUrl + environment.NasaApiKey;
    return this.http.get<NasaAPODResponse>(query);
  }

  getPicturesForLast7Days(startDate: string, endDate: string): Observable<NasaAPODResponse[]> {
    let query = `${this.nasaAPODUrl}?api_key=${environment.NasaApiKey}&start_date=${startDate}&end_date=${endDate}`;
    
      return this.http.get<NasaAPODResponse[]>(query);
  }
}
