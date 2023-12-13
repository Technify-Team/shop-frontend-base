import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {
  @Input()
  quantity: number;

  @Output()
  quantityChange = new EventEmitter<number>


  increaseQuantity():void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decreaseQuantity():void {
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

}
