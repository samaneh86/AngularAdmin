import { PagingEntity } from "./pagingEntity";
import { productDto } from "./productDto";

export class GetProductResponse{
    constructor(
        public products:productDto[],
        public pagingInfo:PagingEntity
    ){}

}