import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, CoreModule, SharedModule, WeatherRoutingModule],
  declarations: [WeatherComponent],
  providers: [WeatherService]
})
export class WeatherModule {}
