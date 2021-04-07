import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {


  darkModeState:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor()
  {
   this.darkModeState=new BehaviorSubject<boolean>(false);
  }
}
