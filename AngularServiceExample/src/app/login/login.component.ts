import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/loginservice.service';


@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  loginform : FormGroup;
  User: any = {};

  constructor(public loginservice: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  savelogin() {
    this.loginservice.Authnticate(this.User).subscribe(response =>
    {
        console.log(response);
    })
    console.log(this.User);
  }
}
