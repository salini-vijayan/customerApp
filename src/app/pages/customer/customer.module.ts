import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    ViewCustomerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
  ],
})
export class CustomerModule {}
