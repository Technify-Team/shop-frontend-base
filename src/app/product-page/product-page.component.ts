import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-list/products';
import { ProductsService } from '../product-list/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  rating: number = 5;
  product: Product; 

  constructor(private route: ActivatedRoute, private productsServise: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.productsServise.getProductById(id).subscribe(res => {
        this.product = res
      })
    });
  }
}
