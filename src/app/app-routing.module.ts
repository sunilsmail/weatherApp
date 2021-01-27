import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './Components/weather-details/weather-details.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';

const routes: Routes = [
  { path: 'weather-list', component: WeatherListComponent },
  { path: 'weather-details', component: WeatherDetailsComponent },
  { path: '',   redirectTo: '/weather-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/weather-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
