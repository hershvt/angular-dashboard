import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    username: '',
    password: ''
  };
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.login = this.loginForm.value;
    if (this.login.username === 'harry' && this.login.password == 'potter') {
      this.auth.loginStatus.next(true);
      this.route.navigate(['dashboard']);
    }
    else {
      this.auth.loginStatus.next(false);
      //add snackbar here for login failed
    }
  }
}
