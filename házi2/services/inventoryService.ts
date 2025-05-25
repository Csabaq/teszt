import { Product } from '../models/product';

export interface IInventoryManager {
  addProduct(product: Product): void;
  removeProduct(productId: string): boolean;
  findProductById(id: string): Product | undefined;
  findProductByName(name: string): Product[];
  listProducts(): Product[];
}

export class Inventory implements IInventoryManager {
    private products : Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
  }

   public removeProduct(productId: string): boolean {
    const index = this.products.findIndex(p => p.getId() === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }

  public findProductById(id: string): Product | undefined {
      return this.products.find(p => p.getId() === id);
  }

  public findProductByName(name: string): Product[] {
      return this.products.filter(p => p.getName() === name);
  }

  public listProducts(): Product[] {
      return [... this.products];
  }
}