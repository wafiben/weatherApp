import { Subscription } from 'rxjs';
import { UiService } from './services/ui.service';
import { FbService } from './services/fb.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit,OnDestroy
{
  title = 'weatherApplication';
  showMenu:boolean=false;
  darkModeActive:boolean =false;
  userEmail:string='';
  sub:Subscription=new Subscription()
  constructor(private router :Router,private fbService:FbService,private uiService:UiService)
  {

  }
  loggedIn=this.fbService.isAuth();
  ngOnInit():void
  {
  this.sub=this.uiService.darkModeState.subscribe(
    (value:boolean)=>
    {
      this.darkModeActive=value;
    });
    this.fbService.userInformations().subscribe(
      (value:string)=>
      {
      this.userEmail=value;
      });

  }
  toggleMenu()
      {
        this.showMenu=!this.showMenu;
      }
      modeToggleSwitch()
      {
        this.uiService.darkModeState.next(this.darkModeActive);
      }
  ngOnDestroy():void
  {
   this.sub.unsubscribe();
  }
  logOut()
  {
    this.toggleMenu();
    this.router.navigate(['/login']);
    this.fbService.signOut();
  }
}
