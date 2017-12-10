import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  clima: any;
  weatherIcon: any;
  dataWeather: any;
  location: {
    city: string,
    ctry: string
  }

  constructor(
    public weatherProvider: WeatherProvider,
    public navCtrl: NavController,
    private storage: Storage
  ){
    // this.getLocation();
  }

  ionViewDidLoad() {
    this.getLocation();
  }

  async getLocation() {
    await this.storage.get('location').then((val) => {
      if(val != null || val != undefined){
        this.location = JSON.parse(val);
        this.getWeather(this.location.city, this.location.ctry);
      } else {
        this.location = {
          city: 'Brasilia',
          ctry: 'BR'
        }
        this.getWeather(this.location.city, this.location.ctry);
      }
    });
  }

  getWeather(city, ctry) {
    console.log('Weather HOME', city, ctry);
    this.weatherProvider.getOpenWeather(city, ctry)
      .subscribe((weather) => {
        if(weather != undefined || weather != null){
        this.dataWeather = weather;
        this.weatherIcon = 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
        this.clima = weather.weather[0].description;
        console.log('CLIMA: ', weather); // this.clima);
        }
      });
  }
}  
