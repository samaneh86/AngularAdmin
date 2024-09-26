export class PagingEntity{
    constructor(
        public activePage:number,
        public pageId:number,
        public CountOfProductsInEachPage:number,
        public CountOfTotalProducts:number,
    ){}
}