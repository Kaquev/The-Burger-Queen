import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../models/menu.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  orderForm!: FormGroup;
  menuItems: MenuItem[] = [];

  constructor(private fb: FormBuilder, private menuService: MenuService) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      clientName: '',
      selectedMenu: this.fb.group({}),
    });

    this.menuService.getMenu().subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }

  addMenuItem(menuItem: MenuItem): void {
    const menuControl = this.orderForm.get('selectedMenu') as FormGroup;
    menuControl.addControl(menuItem.name, this.fb.control(false));
  }

  removeMenuItem(menuItemName: string): void {
    const menuControl = this.orderForm.get('selectedMenu') as FormGroup;
    menuControl.removeControl(menuItemName);
  }

  getSelectedItems(): MenuItem[] {
    const selectedItems: MenuItem[] = [];
    const selectedMenu = this.orderForm.get('selectedMenu') as FormGroup;

    for (const menuItemName in selectedMenu.value) {
      if (selectedMenu.value[menuItemName]) {
        const selectedItem = this.menuItems.find(
          (item) => item.name === menuItemName
        );
        if (selectedItem) {
          selectedItems.push(selectedItem);
        }
      }
    }

    return selectedItems;
  }

  calculateTotal(): number {
    const selectedItems = this.getSelectedItems();
    return selectedItems.reduce((total, item) => total + item.price, 0);
  }

  onSubmit(): void {
    const selectedItems = this.getSelectedItems();
    const total = this.calculateTotal();

    // Puedes hacer lo que necesites con los datos del formulario
    // console.log('Cliente:', this.orderForm?.get('clientName').value);
    console.log('Items seleccionados:', selectedItems);
    console.log('Total:', total);
  }
}
