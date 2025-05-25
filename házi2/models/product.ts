export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private description ? : string
    ) {}

    public getId() : string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getDescription() : string | undefined {
        return this.description;
    }

}