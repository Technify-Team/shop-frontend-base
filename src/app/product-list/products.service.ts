import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/core/base-service.service';
import { Product } from './products';
import { Observable } from 'rxjs';
import { SearchRequest } from 'src/core/interfaces/search-request.interface';
import { SearchResult } from 'src/core/interfaces/search-result.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  private url = "assets/data/products.json";
  constructor(httpClient: HttpClient){
    super(httpClient);
  }

  getProducts(searchRequest: SearchRequest): Observable<SearchResult<Product>> {
    return this.get(this.url, searchRequest);
  }

  getProductById(id: number): Observable<Product> {
    return this.getById(this.url, id);
  }
}
