import { error } from 'console';
import { BackendService } from './../../_services/backend.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  // public error = [];

  form: FormGroup;

  // data = [];

  // public items = this.backend.register(this.form);

  constructor(private backend: BackendService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitRegister() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    // return this.backend.register(this.form).subscribe(
    //   data => console.log(data),
    //   error => this.handleError(error)
    // );
    // this.items = this.backend.register(this.form);
    // console.warn('Your order has been submitted', this.form.value);
    // this.form.reset();
  }

  // handleError(error: any) {
  //   this.error = error.error.errors;
  // }
}
