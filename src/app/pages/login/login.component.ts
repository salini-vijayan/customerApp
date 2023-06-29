import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error?: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // Initialize LoginForm
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@mail.com', [Validators.email, Validators.required]],
      password: ['Admin@23#!', [Validators.required, Validators.minLength(6)]],
    });
  }

  // get form control
  get f() {
    return this.loginForm.controls;
  }

  // on form submission
  onSubmit() {
    this.submitted = true;

    // reset alert on submit
    this.error = '';

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.loginForm.value);
    if (localStorage.getItem('user')) {
      this.loading = false;
      this.router.navigateByUrl('customer');
    } else {
      this.loading = false;
      this.error = 'Email or Password is invalid';
      this.initLoginForm();
    }
  }
}
