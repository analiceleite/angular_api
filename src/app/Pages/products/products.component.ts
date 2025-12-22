import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../Services/products/products.service';
import { ProductsResponse, Product } from '../../Interfaces/products-response';
import { NavbarComponent } from '../../Components/navbar/navbar.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './products.component.html',
  styleUrls: ['../../font.css'],
})
export class ProductsComponent {

  constructor(
    private productsService: ProductsService) { }

  response = signal<Product[]>([]);

  selectedCategory = signal<string>('');
  searchTerm = signal<string>('');

  filteredProducts = computed(() => {
    const products = this.response();
    const category = this.selectedCategory();
    const term = this.searchTerm();

    console.log('Computed triggered: category=', category, 'term=', term); // Debug log

    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (term) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    return filtered;
  });

  categories: string[] = [];
  errorMessage: string = '';
  isLoading = signal(false);

  totalValue = computed(() => {
    return this.cart().reduce((total, item) => total + item.product.price * item.quantity, 0);
  })

  isModalOpen = signal(false);
  cart = signal <{ product: Product, quantity: number }[]>([]);

  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    this.isLoading.set(true);
    this.productsService.showProducts().subscribe({
      next: (data: ProductsResponse) => {
        this.response.set(data.products);
        this.extractCategories();
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage = 'An error occurred while fetching products.';
        this.isLoading.set(false);
      }
    });
  }

  extractCategories() {
    const allCategories = this.response().map(product => product.category);
    this.categories = Array.from(new Set(allCategories));
  }

  filterByCategory(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory.set(selectElement.value);
  }

  searchByName(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchTerm.set(searchTerm);
  }

  addToCart(product: Product) {
    this.cart.update(currentCart => {
      const existingItem = currentCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { product, quantity: 1 }];
      }
    });
  }

  buyNow(product: Product) {
    this.cart.set([{ product, quantity: 1 }]);
    this.openCheckoutModal();
  }

  openCheckoutModal() {
    this.isModalOpen.set(true)
  }

  closeCheckoutModal() {
    this.isModalOpen.set(false);
  }

  processPayment(event: Event) {
    event.preventDefault();
    alert(`Payment processed! Total Cost: ${this.totalValue}`);
    this.closeCheckoutModal();
  }

  clearCart() {
    this.cart.set([]);
  }
}
