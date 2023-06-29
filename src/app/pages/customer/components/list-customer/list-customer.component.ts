import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICustomer } from 'src/app/core/models/customer.model';

@Component({
  selector: '[app-list-customer]',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  @Input() customer: ICustomer = {};
  @Input() slNo!: number;
  @Output() customerDelete = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * Delete custoomer
   * @param index
   */

  deleteCustomer(id:any) {
    this.customerDelete.emit(+id);
  }
}
