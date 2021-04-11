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
  capitals :any[]= [];
  cardCity:string='cardCity';
  ShowNote :boolean = false;
  followedCM:boolean  = false;
  sub1=new Subscription();

  ngOnInit(): void
  {
     this.weatherService.getWeather(this.City).subscribe(
       (value)=>
       {
       this.State=value.weather[0].main;
       this.Temperature=value.main.temp;
       })
       this.weatherService.getCountries().subscribe(
         (counrtries)=>
         {

           counrtries.forEach((country:any)=>
           {
            if(country.capital.length)
            {
              this.capitals.push(country.capital);
            }
           });
           this.capitals.sort();
         })
         this.sub1=this.fbService.getCities().subscribe(
           (cities)=>
           {
            Object.values(cities).forEach(
              (city:any)=>
              {
                if (city.name==="Rome")
                {
                  this.followedCM=true;
                }
              })

           });



  }
  selectCity(city:string)
  {
    if(this.capitals.includes(city))
    {
    this.cardCity=city;
    this.ShowNote=false;
    }
    else if (city.leading>0)
    {
      this.ShowNote = true;
    }

  }
  addCityOfTheMonth()
  {
    this.fbService.addCity('Rome').subscribe(
      ()=>
      {
        this.followedCM=true;
      })
  }


  ngOnDestroy()
  {
  this.sub1.unsubscribe();

  }


}
