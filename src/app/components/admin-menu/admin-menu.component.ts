import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { MenuItem } from 'src/app/models/menu.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getAdminMenu();
  }

  // loadAdminMenuItems(): void {
  //   this.menuItems = this.loginService.getAdminMenu();
  // }

  editMenuItem(menuItem: MenuItem): void {
    // Lógica para editar el elemento del menú
  }

  viewMenuItem(menuItem: MenuItem): void {
    // Lógica para ver el detalle del elemento del menú
  }

  deleteMenuItem(menuItem: MenuItem): void {
    // Lógica para eliminar el elemento del menú
  }

  // Operaciones relacionadas con órdenes
  viewOrders(): void {
    const orders = this.orderService.getOrders();
    this.router.navigate(['/orders']);
    // Lógica para mostrar órdenes
  }

  // Operaciones relacionadas con productos
  viewProducts(): void {
    const products = this.productService.getProducts();
    this.router.navigate(['/products']);
    // Lógica para mostrar productos
  }

  // Operaciones relacionadas con usuarios
  viewUsers(): void {
    const users = this.userService.getUsers();
    this.router.navigate(['/users']);
    // Lógica para mostrar usuarios
  }
}
