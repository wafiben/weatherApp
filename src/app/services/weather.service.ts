import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import  { Subject ,Observable}  from 'rxjs' ;
import { HtmlParser } from '@angular/compiler';
import { catchError, retry, subscribeOn, first } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { ɵangular_packages_router_router_n } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private readonly key='2ba737bbed845a080667b331b4d0ed72';
//api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
//${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`
  constructor(private http: HttpClient) { }
  getWeather(city:string,metric: 'metric' | 'imperial' = 'metric'):Observable<any>
  {

    return this.http.get('api.openweathermap.org/data/2.5/weather?q={city}&units={metric}&appid=2ba737bbed845a080667b331b4d0ed72').
    pipe((first()));
  }
  getForecast(city:string,metric: 'metric' | 'imperial' = 'metric')
  {
    return this.http.get('pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&units={metric}&appid=2ba737bbed845a080667b331b4d0ed72')
    .pipe(first(),map((weather)=>weather[list]:any));
  }
  getCountries()
  {
    return this.http.get('https://restcountries.eu/rest/v2/all')
    .pipe((first()));
  }


}
