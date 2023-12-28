import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Product } from '../../models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-take-order',
  templateUrl: './order-take.component.html',
  styleUrls: ['./order-take.component.css'],
})
export class OrderTakeComponent implements OnInit {
  products: Product[] = [];
  selectedType: string | null = null;
  orderItems: any[] = [];
  total: number = 0;
  isAdmin: boolean = false;
  clientName: string = '';

  constructor(
    private loginService: LoginService,
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  showProducts(type: string): void {
    this.selectedType = type;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: Product[]) => {
      // Actualiza las opciones de menú al inicio según el tipo seleccionado
      this.products = response;
      this.selectedType = 'Beverages';
    });
  }

  showType(product: Product): void {
    alert(`El tipo de producto es: ${product.type}`);
  }

  addToOrder(product: Product): void {
    const existingProductIndex = this.orderItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, incrementa la cantidad y actualiza el precio total
      this.orderItems[existingProductIndex].qty++;
      this.orderItems[existingProductIndex].price += product.price;
    } else {
      // Si el producto no existe, agrégalo al arreglo
      this.orderItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
      });
    }

    this.calculateTotal();
  }

  removeFromOrder(productId: number): void {
    this.orderItems = this.orderItems.filter((item) => {
      if (item.id === productId) {
        this.total -= item.price;
      }
      return item.id !== productId;
    });
    this.calculateTotal();
  }
  calculateTotal(): void {
    this.total = this.orderItems.reduce((acc, item) => acc + item.price, 0);
  }

  createOrder() {}
}
