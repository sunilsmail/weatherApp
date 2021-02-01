import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WeatherItemComponent } from './weather-item.component';

describe('WeatherItemComponent', () => {
  let component: WeatherItemComponent;
  let fixture: ComponentFixture<WeatherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherItemComponent],
      imports:[RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemComponent);
    component = fixture.componentInstance;
    component.weatherItem = {
      coord: { lon: -0.1257, lat: 51.5085 },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      base: 'stations',
      main: {
        temp: 276.8,
        feels_like: 273.07,
        temp_min: 276.48,
        temp_max: 277.15,
        pressure: 992,
        humidity: 93,
      },
      visibility: 6000,
      wind: { speed: 3.09, deg: 360 },
      clouds: { all: 90 },
      dt: 1612157881,
      sys: {
        type: 1,
        id: 1414,
        country: 'GB',
        sunrise: 1612165123,
        sunset: 1612198163,
      },
      timezone: 0,
      id: 2643743,
      name: 'London',
      cod: 200,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
