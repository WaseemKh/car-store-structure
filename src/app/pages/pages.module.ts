import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    
  ],
  exports:[ProductsComponent]
})
export class PagesModule { }
