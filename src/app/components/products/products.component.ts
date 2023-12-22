import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public dataSource: Product[] = [];
  public displayedColumns = [
    'id',
    'name',
    'price',
    'image',
    'type',
    'dateEntry',
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
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
