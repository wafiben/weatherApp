import { Component, OnInit } from '@angular/core';
import { FbService } from '../services/fb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities:any;
  constructor(private fb :FbService) { }

  ngOnInit(): void
  {
   this.cities=this.fb.getCities();
  }

}
