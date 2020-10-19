import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus = new BehaviorSubject<boolean>(false);
  status: boolean;
  constructor() { }

  isAuthenticated(): boolean {


    this.status = this.loginStatus.getValue();
    return this.status;
  }
}
//AuthGuard 
