import { Component, OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnDestroy
{
  city: string=''
  state: string=''
  temp: number=0;
  hum: number=0;
  wind: number=0;
  today: string='';


  day1Name: string=''
  day1State: string='';
  day1Temp: number=0;

  day2Name: string=''
  day2State: string='';
  day2Temp: number=0;

  day3Name: string=''
  day3State: string='';
  day3Temp: number=0;

  day4Name: string=''
  day4State: string='';
  day4Temp: number=0;

  day5Name: string='';
  day5State: string='';
  day5Temp: number=0;


  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;
  constructor(private activeRouter: ActivatedRoute,private weatherService:WeatherService) { }

  ngOnInit(): void
  {
    const todayNumberInWeek=new Date().getDay();
    const days :string[]= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.today=days[todayNumberInWeek];
    this.activeRouter.paramMap.subscribe(
      (route)=>
      {
      this.city=this.activeRouter.params.city;
      this.sub1=this.weatherService.getWeatherState(this.city).subscribe((state:any)=>this.state=state);
      this.sub2=this.weatherService.getCurrentTemp().subscribe((temp:number)=>this.temp=temp);
      this.sub3 = this.weatherService.getCurrentHum(this.city).subscribe((humidity:number) => this.hum = humidity);
      this.sub4 = this.weatherService.getCurrentWind(this.city).subscribe((windspeed:number) => this.wind = windspeed);
      this.sub5 = this.weatherService.getForecast(this.city).subscribe(
      (data: any) =>
      {
      console.log(data);
      for(let i=0;i<data.length;i++)
      {
        const date =new Date(data[i]).getDay();
        console.log(days[date]);
      }
  });


  }

  ngOnDestroy()
{
  this.sub1.unsubscribe();
  this.sub2.unsubscribe();
  this.sub3.unsubscribe();
  this.sub4.unsubscribe();
  this.sub5.unsubscribe();

}
  }

