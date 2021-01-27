import { Component, Input, OnInit } from '@angular/core';
import { Weather, WeatherObj } from 'src/app/model/weather';
import { WeatherService } from './../../service/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent implements OnInit {
  listItems: WeatherObj;

  constructor(private weatherApi: WeatherService) {}

  ngOnInit(): void {
    this.weatherApi
      .getWeatherCitiesData([2643743, 2643745, 2643853, 2644210, 2644676])
      .subscribe((data: WeatherObj) => {
        this.listItems = data;
      });
  }
}
