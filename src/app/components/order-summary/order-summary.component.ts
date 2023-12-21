// order-summary.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  orderForm!: FormGroup;
  menuItems: MenuItem[] = [];
  isAdmin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      clientName: '',
      selectedMenu: '',
      additionalComments: '',
    });

    this.isAdmin = this.loginService.isAdmin();

    // Usa el servicio de menú correspondiente según el tipo de usuario
    const menuObservable = this.isAdmin
      ? this.menuService.getAdminMenu()
      : this.menuService.getUserMenu();

    menuObservable.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }

  addMenuItem(menuItem: MenuItem): void {
    // Resto del código para agregar un elemento al formulario
  }

  removeMenuItem(menuItemName: string): void {
    // Resto del código para eliminar un elemento del formulario
  }

  getSelectedItems(): MenuItem[] {
    return [];
    // Resto del código para obtener elementos seleccionados
  }

  calculateTotal(): number {
    return 0;
    // Resto del código para calcular el total
  }

  onSubmit(): void {
    // Resto del código para manejar la submisión del formulario
  }
}
