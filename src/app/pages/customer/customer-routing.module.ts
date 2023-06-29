import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerByIdResolver } from 'src/app/core/resolver/customerbyId.resolver';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  {
    path: 'view/:id',
    resolve: { customer: CustomerByIdResolver },
    component: ViewCustomerComponent,
  },
  {
    path: 'edit/:id',
    resolve: { customer: CustomerByIdResolver },
    component: EditCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
