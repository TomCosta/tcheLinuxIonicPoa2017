import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs';

@Injectable()
export class WeatherProvider {
  apiKey = 'e659687d5c33ddd16b00b2d17ba201e4';
  openUrl: any;

  constructor(
    public http: Http,
    private alertCtrl: AlertController
  ){
    console.log('Hello WeatherProvider Provider');    
    this.openUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getOpenWeather(city, ctry) {
    return this.http.get(this.openUrl + city + ',' + ctry + '&lang=pt&units=metric' + '&APPID=' + this.apiKey)
      .map((res: Response) => res.json())
      .catch(this.catchErrors())
  }

  private catchErrors() {
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        //handle authorization errors
        this.presentAlert('Adicione a sua Api Key!');
      } else if (res.status === 404) {
        this.presentAlert('Cidade não encontrada!');
      }
      return Observable.throw(res);
    };
  }
  presentAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Opss..',
      subTitle: message,
      buttons: ['Entendi']
    });
    alert.present();
  }
}
