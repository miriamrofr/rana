import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from '../types';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginFormGroup: FormGroup;
  constructor(formBuilder:FormBuilder,private _loginService: LoginService, private _router: Router) { 
    
    this.loginFormGroup = formBuilder.group({

      email: ["",[Validators.required]],
      password: ["",[Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(){

    const loginCredentials: LoginCredentials = this.loginFormGroup.value;
    this._loginService.login(loginCredentials).then((authData)=>{
      this._router.navigate(["/tabs"])
      console.log(authData);
    })
    .catch((authError)=>{
      console.log("Auth Error=>", authError);
    });

    

  }

}
