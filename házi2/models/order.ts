import { Product } from './product';

export enum orderStatus{
    New = "Új",
    Processing = "Feldolgozás alatt",
    Shipped = "Kiszállítva"
}

export class Order {
    constructor(
        private orderId: string,
        private products : Product[]
    ){}

    private status: orderStatus;

    public statusUpdate(status : orderStatus): void{
        this.status = status;
    }

    
  public getTotalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.getPrice(), 0);
  }
}