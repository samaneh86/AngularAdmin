export class AddProductDto{
    constructor(

        public productName:string,
        public productPrice:number,
        public productImage:string,
        public productShortDescription:string,
        public productDescription:string


    ){}
    
}