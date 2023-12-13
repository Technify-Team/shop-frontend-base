export interface Product {
    id: number
    categoryId: number
    name: string
    photo: string
    price: number
    rating: number
    description: string
}

export interface SelectedProduct extends Product {
    quantity?: number;
}