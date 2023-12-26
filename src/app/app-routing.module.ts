import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'admin-menu', component: AdminMenuComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
