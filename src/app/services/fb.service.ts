import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import {AngularFireLiteAuth, AngularFireLiteFirestore} from 'angularfire-lite';
import { observable, Observable } from 'rxjs';
import { interval } from 'rxjs';
import { from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';
import {first, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FbService {

A =new Observable<any>()
  constructor(private fs:AngularFireLiteFirestore,
    public auth:AngularFireLiteAuth)
    {}
    isAuth()
    {
      return this.auth.isAuthenticated();
    }
    signIn(email:string,password:string)
    {
      return this.auth.signin(email,password);
    }
    signUp(email:string,password:string)
    {
      return  this.auth.signup(email,password);
    }
    signOut()
    {
      return this.auth.signout();
    }
    userInformations():Observable<any >
    {
      return this.auth.userData();
    }

  getCities()
  {
    return this.auth.uid().pipe(switchMap((uid) => {
      let a =this.fs.read('${uid}');
      this.A=a;
      return this.fs.read('${uid}');

    }));
  }
  addCity(name: string) {
    return this.auth.uid()
      .pipe(switchMap((uid) => {
        return this.fs
          .write('${uid}/${name}', {name, added: new Date()})
          .pipe(first());
      }), first());
  }
}
