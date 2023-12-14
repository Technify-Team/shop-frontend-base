import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { OrderInfo, ProductInfo } from './order';


class Order {
  products: Map<number, number> = new Map<number, number>();
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private key = 'order'
  private order: Order;
  private orderSubj: Subject<OrderInfo> = new BehaviorSubject<OrderInfo>(new OrderInfo());

  $order: Observable<OrderInfo> = this.orderSubj.asObservable();

  constructor() {
    this.order = this.getData(this.key) 
      ? JSON.parse(this.getData(this.key), this.reviver)
      : new Order();
    this.orderSubj.next(this.getOrderInfo());
  }

  public getOrderInfo(): OrderInfo {
    const order = new OrderInfo();
    order.products = Array.from(this.order.products, function (item) {
      const productInfo = new ProductInfo();
      productInfo.productId = item[0];
      productInfo.quantity = item[1];
      return productInfo;
    });
    return order;
  }

  public addToOrder(productId: number, quantity: number) {
    if (this.order.products.has(productId)) {
      let currentQuantity = this.order.products.get(productId) as number;
      const overalAmount = currentQuantity + quantity;
      this.order.products.set(productId, overalAmount);
    } else {
      this.order.products.set(productId, quantity);
    }

    this.saveData(this.order);
    this.orderSubj.next(this.getOrderInfo());
  }

  public updateOrder(productId: number, quantity: number) {
    this.order.products.set(productId, quantity);

    this.saveData(this.order);
    this.orderSubj.next(this.getOrderInfo());
  }

  private saveData(order: Order) {
    localStorage.setItem(this.key, JSON.stringify(order, this.replacer));
  }

  private getData(key: string): string {
    return localStorage.getItem(key) || "";
  }

  public deleteProductById(id: number){
    this.order.products.delete(id);
    
    this.saveData(this.order);
    this.orderSubj.next(this.getOrderInfo());
  }

  public clearOrder() {
    this.order = new Order();
    localStorage.clear();
    this.orderSubj.next(this.getOrderInfo());
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
