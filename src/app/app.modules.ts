import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../app/Pages/home/home.component'; 
import { ProductsComponent } from '../app/Pages/products/products.component'; 

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AppModule { } 
