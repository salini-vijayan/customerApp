import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from '../core/models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  customer: any;
  customers: ICustomer[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@mail.com',
      contact: '9012365478',
      dob: '1994-05-01',
      address: 'Sam Cottage IN',
    },
    {
      id: 2,
      name: 'Max Lyn',
      email: 'max@mail.com',
      contact: '8458796520',
      dob: '1988-04-05',
      address: 'House No:62A Stan Lane',
    },
    {
      id: 3,
      name: 'Peter Paul',
      email: 'peter@mail.com',
      contact: '751369820',
      dob: '1990-08-12',
      address: '2/48 Axis Apartment',
    },
    {
      id: 4,
      name: 'Mira L',
      email: 'meera@mail.com',
      contact: '9874512358',
      dob: '1970-09-29',
      address: 'Momo Apartments',
    },
    {
      id: 5,
      name: 'Sam John',
      email: 'sam@mail.com',
      contact: '8754120365',
      dob: '1982-01-31',
      address: 'Light Lane PL',
    },
    {
      id: 6,
      name: 'Leka Sam',
      email: 'leka@mail.com',
      contact: '7569842130',
      dob: '1977-05-12',
      address: 'Leka House No:01',
    },
    {
      id: 7,
      name: 'Jiva Jake',
      email: 'jiva@mail.com',
      contact: '9562301475',
      dob: '198410-28',
      address: 'PP Apartment',
    },
    {
      id: 8,
      name: 'Mark M',
      email: 'mark@mail.com',
      contact: '6985471235',
      dob: '1990-08-25',
      address: 'House No:7A',
    },
    {
      id: 9,
      name: 'Nia Lian',
      email: 'nia@mail.com',
      contact: '8456210325',
      dob: '1992-02-02',
      address: 'Seven Apartment',
    },
    {
      id: 10,
      name: 'Lia Nian',
      email: 'lia@mail.com',
      contact: '7542631025',
      dob: '1972-11-25',
      address: 'Seven Apartment',
    },
  ];
  constructor(private router: Router) {}

  /**
   * Get all customers
   * @returns
   *
   */
  getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.customers };
        resolve(data);
      }, 500);
    });
  }

  /**
   * Register customer
   * @param data
   */

  registerCustomer(data: ICustomer) {
    data.id = this.customers.length + 1;
    this.customers.push(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customer);
      }, 500);
    });
  }

  /**
   * Update customer details
   * @param data
   */
  editCustomer(id: number, data: ICustomer) {
    const index = this.customers.findIndex((cus) => cus.id === +id);
    data.id = id;
    this.customers[index] = data;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customer);
      }, 500);
    });
  }

  /**
   * View a customer
   * @param id
   */
  viewCustomer(id: number) {
    this.customer = this.customers.find((cus) => cus.id === +id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customer);
      }, 500);
    });
  }
  /**
   * Delete a customer
   * @param id
   */
  deleteCustomer(id: number) {
    const index = this.customers.findIndex((cus) => cus.id === +id);
    this.customers.splice(index, 1);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.customer);
      }, 500);
    });
  }
}
