import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  city:string;
  ctry:string;
  location = {
    city: '',
    ctry: 'BR'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
  ){
      this.storage.get('location').then((val) => {
        if(val != null || val != undefined){
          let location = JSON.parse(val);
          this.city = location.city;
          this.ctry = location.ctry;
        } else {
          this.city = 'Brasilia';
          this.ctry = 'BR';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  saveConfig(formData){
    console.log('Form data is ', formData);
    this.location = {
      city: formData.city,
      ctry: formData.ctry
    }
    this.storage.set('location', JSON.stringify(this.location));
    this.navCtrl.setRoot(HomePage);
  }

}
