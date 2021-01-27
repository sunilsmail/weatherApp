import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';
import { WeatherDetailsComponent } from './Components/weather-details/weather-details.component';
import { WeatherItemComponent } from './Components/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherDetailsComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
