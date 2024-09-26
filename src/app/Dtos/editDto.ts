export  class EditDto{
    constructor(
        public id:number,
        public productName:string,
        public price:number,
        public productImage:string,
        public shortDescription:string,
        public description:string,
       
        public CurrentImage:string,
        public base64:string|null,
    ){

    }
}