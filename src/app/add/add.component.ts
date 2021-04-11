import { Subscription } from 'rxjs';
import { FbService } from './../services/fb.service';
import { WeatherService } from './../services/weather.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map} from 'rxjs/operators';
import  { Subject ,Observable}  from 'rxjs' ;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit,OnDestroy {

  constructor(public http:HttpClient,
    private weatherService:WeatherService,
    private fbService:FbService) { }

   Temperature: number=0;
  City = 'Rome';
  State: string='state'
  capitals = [];
  selectedCity;
  cardCity;
  ShowNote :boolean = false;
  followedCM:boolean  = false;
  sub1=new Subscription();

  ngOnInit(): void
  {
     this.weatherService.getWeather(this.city).subscribe(
       (value)=>
       {
       this.State=value.weather[0].main;
       this.Temperature=value.main.temp;
       })
       this.http.get('https://restcountries.eu/rest/v2/all')
       .pipe((first())).subscribe(
         (countries:Array <>)=>
         {
            countries.forEach(country :any=> {

            });
         })

  }


  ngOnDestroy()
  {

  }


}
