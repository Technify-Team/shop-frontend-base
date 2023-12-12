import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-list/products';
import { ProductsService } from '../product-list/products.service';
import { Order } from 'src/core/interfaces/search-request.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  rating: number = 5;
  product: Product; 
  products: Product [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      const subrsription = this.productsService.getProductById(id).subscribe(res => {
        this.product = res;
        subrsription.unsubscribe();
      })
    });

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
  }

  
}
