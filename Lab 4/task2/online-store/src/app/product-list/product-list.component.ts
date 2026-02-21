import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../data/products';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  searchQuery: string = '';
  filteredProducts: Product[] = [];

  // gallery state (если у тебя есть)
  activeImage: Record<number, string> = {};

  ngOnInit() {
    // init gallery (если нужно)
    for (const p of this.products) {
      this.activeImage[p.id] = p.image;
    }

    // init filtered list
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    const query = this.searchQuery.trim().toLowerCase();

    if (!query) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }

  get totalCount(): number {
  return this.products.length;
}

  get shownCount(): number {
    return this.filteredProducts.length;
  }

  setActiveImage(productId: number, img: string) {
    this.activeImage[productId] = img;
  }

  starsArray(rating: number): boolean[] {
    // 5 stars, filled if index < rounded rating
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('ru-KZ').format(price) + ' ₸';
  }

  whatsappShareUrl(product: Product): string {
    const text = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl(product: Product): string {
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
  }
}