import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { MockWeatherService } from 'src/app/service/mock-weather.service';
import { WeatherService } from 'src/app/service/weather.service';

import { WeatherDetailsComponent } from './weather-details.component';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailsComponent],
      providers: [
        { provide: WeatherService, useClass: MockWeatherService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ name: 'london' }]),
          }
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    weatherService = TestBed.inject(WeatherService);
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
