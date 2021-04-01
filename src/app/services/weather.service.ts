import { Injectable } from '@angular/core';
import  { HttpClient }  from  '@ angular / common / http' ;
import  { Subject ,Observable}  from 'rxjs' ;
import { HtmlParser } from '@angular/compiler';
import { catchError, retry } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { ɵangular_packages_router_router_n } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeatherState(city:string )
  {
    const dataSub = new Subject<string>();
   this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562`)
   .subscribe(
     (data:string)=>
     {
      dataSub.next(data);
     },
     (error:ErrorEvent)=>
     {
       console.log(error);
     }
     )
     return dataSub;
  }
  getCurrentTemp(city: string)
    {
     const dataSubject=new Subject<number>()
     this.http.get().subscribe(
       (data:number)=>
       {
       dataSubject.next(data);
       },
       (error:any)=>
       {
        console.log(error);
       })
       return dataSubject;
    }
    getCurrentHum(city:string)
    {
      const dataSubject=new Subject<number>()
      this.http.get().subscribe(
        (data:number)=>
        {
          dataSubject.next(data);
        },
        (error:any)=>
        {
          console.log(error);
        })
       return dataSubject;
    }
    getCurrentWind(city:string)
    {
      const dataSubject=new Subject<number>()
      this.http.get().subscribe(
        (data:number)=>
        {
          dataSubject.next(data);
        })
        return dataSubject;
    }
    getForecast(city:string)
    {
      const dataSubject = new Subject<Array<any>>();
      this.http.get().subscribe(
        (data:any)=>
        {
          dataSubject.next(data);
        },
        (error:any)=>
        {
         console.log(error);
        })
        return dataSubject;
    }
}
