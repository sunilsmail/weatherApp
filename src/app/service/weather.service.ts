import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherObj } from '../model/weather';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherCitiesData(citiIds: number[]): Observable<WeatherObj> {
    const url = `http://api.openweathermap.org/data/2.5/group?id=${citiIds.join()}&appid=${
      environment.ApiKey
    }`;
    return this.http.get<WeatherObj>(url);
  }

  getWeatherCity(name: string): Observable<WeatherObj> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${
      environment.ApiKey
    }`;
    return this.http.get<WeatherObj>(url);
  }
}
