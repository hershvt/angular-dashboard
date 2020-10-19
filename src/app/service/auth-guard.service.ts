import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  status: boolean;
  constructor(private auth: AuthService, private route: Router) { }

  canActivate(): boolean {
    this.status = this.auth.isAuthenticated();
    if (this.status == false) {
      this.route.navigate(['login']);
    }
    else
      return this.status;
  }
}



//we need to talk to angular framework from here.. 