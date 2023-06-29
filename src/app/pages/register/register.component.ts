import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ageLimitValidator } from 'src/app/core/helpers/validation.helper';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error: string = '';
  success: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    //Initialize Register Form
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      contact: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      dob: ['', [Validators.required, ageLimitValidator(18)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // get form control
  get f() {
    return this.registerForm.controls;
  }

  // on form submission
  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.success = '';
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    const promise = this.customerService.registerCustomer(
      this.registerForm.value
    );
    promise.then(
      (response: any) => {
        this.success = 'Customer added successfully;';
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
