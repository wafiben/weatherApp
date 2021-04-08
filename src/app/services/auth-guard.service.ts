import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { FbService } from './fb.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate
{

  constructor(private  fb: FbService, private router: Router) { }
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.fb.isAuth().pipe(map(
      auth => {
        if (!auth)
        {
          return true;
        } else
        {
          this.router.navigate(['/']);
          return false;
        }
      }
    ));
  }
}
