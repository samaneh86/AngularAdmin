import { ProductOrder } from "./productOrder";
export class ProductFilter{
    constructor(
        public pageId:number,
        public minPrice:number,
        public maxPrice:number,
        public title:string,
        public productOrder:ProductOrder,
        public categories:number[],
    ){}
    
    
}