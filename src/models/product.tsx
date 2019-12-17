export interface IDiscount {
    regular?: number;
    vip?: number;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    inventory: number;
    discounts: IDiscount
}

export class Product implements IProduct {

    constructor(
        public id: number = (Math.floor(Math.random() * 1000)), 
        public name: string = "?", 
        public price: number = null, 
        public inventory: number = 0,
        public discounts: IDiscount = null) { }

}