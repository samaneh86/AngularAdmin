import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseStatus } from '../Dtos/response';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductFilter } from '../Dtos/productFilter';
import { GetProductResponse } from '../Dtos/getProductResponse';
import { AddProductDto } from '../Dtos/addProductDto';
import { EditDto } from '../Dtos/editDto';
import { productDto } from '../Dtos/productDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
products:BehaviorSubject<productDto[]>=new BehaviorSubject<productDto[]>(null as any);
setProducts(products:productDto[]){
this.products.next(products)
}
getProducts(){
  return this.products;
}


  getAllProduct(filter:ProductFilter): Observable<ResponseStatus<GetProductResponse>> {
    return this.http.post<ResponseStatus<GetProductResponse>>("/product/get-all-products",filter)
  }

  addProduct(product:AddProductDto): Observable<ResponseStatus<string>> {
    return this.http.post<ResponseStatus<string>>("/product/add-product",product)
  }
  getProductById(id:number): Observable<ResponseStatus<EditDto>> {
    return this.http.get<ResponseStatus<EditDto>>("/product/get-product-by-id/"+id)
  }
editForm(edit:EditDto): Observable<ResponseStatus<string>>{
  return this.http.post<ResponseStatus<string>>("/product/edit-product",edit)
}
delete(id:number): Observable<ResponseStatus<string>>{
  return this.http.get<ResponseStatus<string>>("/product/delete-product/"+id)
}
}
