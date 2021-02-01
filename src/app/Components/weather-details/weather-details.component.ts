import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent implements OnInit {
  name: string;
  weatherItem: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.name = param['name'];
      this.weatherService.getWeatherCity(this.name).subscribe((weather) => {
        this.weatherItem = weather;
      });
    });
  }
}
