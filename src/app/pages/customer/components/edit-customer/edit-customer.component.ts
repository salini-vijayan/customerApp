import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ageLimitValidator } from 'src/app/core/helpers/validation.helper';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  updateForm!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  error: string = '';
  success: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  get CustomerById() {
    return this.route.snapshot.data;
  }

  ngOnInit(): void {
    this.InitUpdateform();
  }

  InitUpdateform() {
    this.updateForm = this.formBuilder.group({
      name: [
        this.CustomerById ? this.CustomerById.customer.name : '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
        ],
      ],
      email: [
        this.CustomerById ? this.CustomerById.customer.email : '',
        [Validators.email, Validators.required],
      ],
      contact: [
        this.CustomerById ? this.CustomerById.customer.contact : '',
        [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.required],
      ],
      dob: [
        this.CustomerById ? this.CustomerById.customer.dob : '',
        [
          Validators.required,
          ageLimitValidator(18),
        ],
      ],
      address: [
        this.CustomerById ? this.CustomerById.customer.address : '',
        [Validators.required, Validators.minLength(3)],
      ],
    });
  }

  // get form control
  get f() {
    return this.updateForm.controls;
  }

  // on form submission
  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.success = '';
    if (this.updateForm.invalid) {
      return;
    }
    this.loading = true;
    const promise = this.customerService.editCustomer(
      this.CustomerById?.customer?.id,
      this.updateForm.value
    );
    promise.then(
      (response: any) => {
        this.loading = false;
        this.success = 'Customer Updated Successfully';
        this.router.navigateByUrl('/customer');
      },
      (error) => {
        this.loading = false;
        this.error = error;
      }
    );
  }
}
