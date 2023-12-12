import { Component } from '@angular/core';
import { Product } from '../product-list/products';
import { ProductsService } from '../product-list/products.service';
import { OrderService } from '../local.service';
import { Order } from 'src/core/interfaces/search-request.interface';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent {

  products: Product[];
  ids: Array<number>;

  cols: any[];

  constructor(private productsService: ProductsService, private orderService: OrderService) {}

  ngOnInit() {

      this.productsService.getProducts({
        skip: 0,
        take: 4,
        orderBy: {
          fieldName: "price",
          order: Order.asc
        }
      }).subscribe(res => {
        this.products = res.items;
      });

      this.cols = [
        { field: 'photo', header: 'Товар' },
        { field: 'price', header: 'Ціна' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'sum', header: 'Підсумок' },
    ];
  }


  //     this.productsService.getProductsMini().then((data) => {
  //         this.products = data;
  //     });


  // }
}

