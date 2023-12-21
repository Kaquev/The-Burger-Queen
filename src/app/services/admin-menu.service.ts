// admin-menu.service.ts
import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from '../models/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminMenuService extends MenuService {

  getMenuItemsForAdmin(): MenuItem[] {
    const adminMenuItems: MenuItem[] = /* Lógica para obtener elementos específicos para administrador */;
    return adminMenuItems;
  }
}
