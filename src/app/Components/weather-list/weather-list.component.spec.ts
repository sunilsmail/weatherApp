import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockWeatherService } from 'src/app/service/mock-weather.service';
import { WeatherService } from 'src/app/service/weather.service';

import { WeatherListComponent } from './weather-list.component';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;
  let weatherService : WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherListComponent ],
      providers:[{ provide: WeatherService, useClass: MockWeatherService} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    weatherService = TestBed.inject(WeatherService);
    fixture = TestBed.createComponent(WeatherListComponent);
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
