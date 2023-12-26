import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MenuService } from '../../services/menu.service';
import { Product } from '../../models/product.interface';
import { MenuItem } from 'src/app/models/menu.interface';
import { response } from 'express';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  orderForm!: FormGroup;
  menuItems: Product[] = [];
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

    this.menuService.getMenu().subscribe((response) => {
      console.log(response);
      this.menuItems = response;
    });
    // Suscribe a cambios en el tipo de menú seleccionado para actualizar las opciones
    this.orderForm.get('selectedMenu')?.valueChanges.subscribe(() => {
      this.updateMenuItems();
    });
  }

  updateMenuItems(): void {
    // Filtra las opciones de menú según el tipo seleccionado
    // const selectedType = this.orderForm.get('selectedMenu')?.value;
    // this.menuItems = this.menuItems.filter(
    //   (item) => item.type === selectedType
    // );
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

  // Resto del código...
}
