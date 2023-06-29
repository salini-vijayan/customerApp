import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CustomerService } from "src/app/services/customer.service";

@Injectable({ providedIn: 'root' })
export class CustomerByIdResolver implements Resolve<any> {
  constructor(private customerService: CustomerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return this.customerService.viewCustomer(route.params['id']);
  }
}
