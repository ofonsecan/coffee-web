import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CoffeeListComponent],
  declarations: [CoffeeListComponent]
})
export class CoffeeModule { }
