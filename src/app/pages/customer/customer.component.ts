import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/core/models/customer.model';
import { SwalAlertService } from 'src/app/services/alert.services';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customers: ICustomer[] = [];
  error: string = '';
  success: string = '';
  constructor(
    private customerService: CustomerService,
    private swalalertService: SwalAlertService
  ) {}

  ngOnInit(): void {
    // fetch all customers
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.error = '';
    const promise = this.customerService.getAllCustomers();
    promise.then(
      (response: any) => {
        this.customers = response['res'];
      },
      (error) => {
        this.error = error;
      }
    );
  }

  /**
   * Delete customer
   * @param index
   */
  delete(index: number) {
    this.success = '';
    this.error = '';
    this.swalalertService.alertConfirmation().then((result) => {
      if (result.value) {
        const promise = this.customerService.deleteCustomer(index);
        promise.then(
          (response: any) => {
            this.success = 'Customer Deleted Successfuly';
          },
          (error) => {
            this.error = error;
          }
        );
      }
    });
  }
}
