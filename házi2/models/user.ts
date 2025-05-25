import { Inventory } from '../services/inventoryService';
import { Product } from './product';
import { Order } from './order';

export class User {
    private orders: Order[] = [];
    
    
    constructor(
        private userId: string,
        private name: string,
        private email: string
    ){}
}