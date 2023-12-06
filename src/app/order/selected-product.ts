import { Product } from "../product-list/products";

export class SelectedProduct {
    private _id: number;
    private _quantity: number;
    
    constructor(productId: number, quantity: number) {
        this._id = productId;
        this._quantity = quantity;
    }

    get id(): number {
        return this._id;
    }

    get quantity(): number {
        return this._quantity;
    }
}
