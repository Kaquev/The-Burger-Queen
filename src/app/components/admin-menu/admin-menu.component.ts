import { Component, OnInit } from '@angular/core';
import { AdminMenuService } from '../../services/admin-menu.service';
import { MenuItem } from 'src/app/models/menu.interface';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private adminMenuService: AdminMenuService) {}

  ngOnInit(): void {
    this.loadAdminMenuItems();
  }

  loadAdminMenuItems(): void {
    this.menuItems = this.adminMenuService.getMenuItemsForAdmin();
  }

  editMenuItem(menuItem: MenuItem): void {
    // Lógica para editar el elemento del menú
  }

  viewMenuItem(menuItem: MenuItem): void {
    // Lógica para ver el detalle del elemento del menú
  }

  deleteMenuItem(menuItem: MenuItem): void {
    // Lógica para eliminar el elemento del menú
  }
}
