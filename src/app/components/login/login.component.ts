import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  }

  constructor() { }

  ngOnInit(): void {}

  submitLogin() {
    console.log(this.form);
  }

}
