import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarchService {
  private readonly searchUrl = "https://www.google.com/search?q=";
  private readonly nasaAPODUrl = "https://api.nasa.gov/planetary/apod?api_key=";

  constructor(
    private http: HttpClient,
  ) {}

  submitSearch(searchInput: string): void {
    let searchQuery = this.searchUrl + searchInput;
    location.href = searchQuery;
  }

  getPictureOfTheDay(): Observable<Object> {
    let query = this.nasaAPODUrl + environment.NasaApiKey;
    return this.http.get(query);
  }
}
