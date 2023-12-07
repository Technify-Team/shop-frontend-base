import { Injectable } from '@angular/core';
import { Product } from './product-list/products';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SelectedProduct } from './order/selected-product';

class Order {
  products: Map<number, number> = new Map<number, number>();
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private key = 'order'
  private order: Order;
  private orderSubj: Subject<Order> = new BehaviorSubject<Order>(new Order());

  $order: Observable<Order> = this.orderSubj.asObservable();

  constructor() {
    this.order = this.getData(this.key) 
      ? JSON.parse(this.getData(this.key), this.reviver)
      : new Order();
    this.orderSubj.next(this.order);
  }

  public addToOrder(product: SelectedProduct) {
    if (this.order.products.has(product.id)) {
      let currentQuantity = this.order.products.get(product.id) as number;
      const quantity = currentQuantity + product.quantity;
      this.order.products.set(product.id, quantity);
    } else {
      this.order.products.set(product.id, product.quantity);
    }

    this.saveData(this.order);
    this.orderSubj.next(this.order);
  }

  private saveData(order: Order) {
    localStorage.setItem(this.key, JSON.stringify(order, this.replacer));
  }

  private getData(key: string): string {
    return localStorage.getItem(key) || "";
  }

  public clearOrder() {
    this.order = new Order();
    localStorage.clear();
    this.orderSubj.next(this.order);
  }

  private replacer(key: any, value: any) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  private reviver(key: any, value: any) {
    console.log(key, value);
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }
}
