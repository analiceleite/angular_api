import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngIf e *ngFor
import { ProductsService } from '../../Services/products/products.service';
import { FooterComponent } from '../../Components/footer/footer.component';
import { Router } from '@angular/router';
import { ProductsResponse, Product } from '../../Interfaces/products-response'; // Importe a interface
import { NavbarComponent } from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productsService = inject(ProductsService);
  router = inject(Router);

  response: Product[] = []; 
  errorMessage: string = '';
  isLoading: boolean = false;
  totalValue: number = 0;

  ngOnInit() {
    this.showProducts(); 
  }

  showProducts() {
    this.isLoading = true;
    this.productsService.showProducts().subscribe({
      next: (data: ProductsResponse) => {
        this.response = data.products; 
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar os produtos.';
        this.isLoading = false;
      }
    });
  }

  addToCart(product: Product) {
    this.totalValue += product.price;
  }
}
