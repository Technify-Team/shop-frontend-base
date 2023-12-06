import { Injectable } from '@angular/core';
import { Product } from './product-list/products';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SelectedProduct } from './order/selected-product';

class Order {
  products = new Map<number, number>();
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
    this.order = this.getData(this.key) ? JSON.parse(this.getData(this.key)) : new Order();
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
    localStorage.setItem(this.key, JSON.stringify(order));
  }

  private getData(key: string): string {
    return localStorage.getItem(key) || "";
  }

  public clearOrder() {
    this.order = new Order();
    localStorage.clear();
    this.orderSubj.next(this.order);
  }
}
