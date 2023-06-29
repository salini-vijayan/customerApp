import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS } from '.';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...SHARED_COMPONENTS, RouterModule],
})
export class SharedModule {}
