import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitRegister() {
    console.log(this.form);
  }

}
