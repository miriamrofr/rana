import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CanEnterTabsPageGuard implements CanActivate {
  constructor(private _angularFireAuth: AngularFireAuth, 
    private _route: Router){
  
    }
  
    
    canActivate(activatedRouteSnapshotute: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot){
      return this._angularFireAuth.authState.pipe(
        map((auth)=>{
          if(!auth){
            this._route.navigate(["/login"]);
            return false;
          }else{
            return true;
          }
        })
      ) 
    }
  
  
}
