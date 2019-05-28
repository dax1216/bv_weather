import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  zip = '';
  location: any;
  weather: any;
  displayOnce = true;
  error: any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {}

  getWeather() {
    const zip = this.zip;
    let locationKey = '';
    this.location = null;
    this.weather = null;
    this.displayOnce = false;

    this._weatherService.getLocationKey({ zip }).subscribe(locationData => {
      if(locationData.length > 0) {
        this.location = locationData[0];
        locationKey = locationData[0].Key;

        this._weatherService.getWeather({ locationKey }).subscribe(weatherData => {
          if(weatherData.length > 0) {
            this.weather = weatherData[0];
          } else {
            this.error = weatherData;
          }
        })
      } else {
        this.error = locationData;
      }

    });
  }
}
