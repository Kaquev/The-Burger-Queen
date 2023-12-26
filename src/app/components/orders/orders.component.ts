import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/models/order.inteface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public dataSource: Order[] = [];
  public displayedColumns = ['id', 'precio', 'image', 'type', 'date'];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (response: Order[]) => {
        console.log('Datos de la orden:', response);
        this.dataSource = response;
      },
      (error) => {
        // Manejar errores si es necesario
        console.error(error);
      }
    );
  }
}
