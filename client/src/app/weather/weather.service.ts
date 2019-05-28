import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = environment.serverUrl;

  constructor(private _http: HttpClient) {}

  getLocationKey(filters: any): Observable<any> {
    const url = this.apiUrl + 'location/zip';

    return this._http.post<any>(url, filters);
  }

  getWeather(filters: any): Observable<any> {
    const url = this.apiUrl + 'weather';

    return this._http.post<any>(url, filters);
  }
}
