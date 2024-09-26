import { DomainName } from './../utelities/pathtool';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductFilter } from '../Dtos/productFilter';
import { ProductOrder } from '../Dtos/productOrder';
import { productDto } from '../Dtos/productDto';
import { PagingEntity } from '../Dtos/pagingEntity';
import { EditDto } from '../Dtos/editDto';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  myProducts: productDto[] = null as any;
  products: productDto[] = null as any;
  pagingInfo: PagingEntity = null as any;
  productFilter: ProductFilter = null as any;
  pages: number[] = [];
  active = ""
  domainName = DomainName;
  product: EditDto = null as any;
  editForm: FormGroup = null as any;
  editData: EditDto = null as any;
  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit() {
    this.productFilter = new ProductFilter(1, 0, 0, "", ProductOrder.Asc, []);
    this.getProducts();
  }
  getProducts() {
    this.productService.getAllProduct(this.productFilter).subscribe(res => {
      this.productService.setProducts(res.data.products);
      this.productService.getProducts().subscribe(res => {
        this.products = res;
      })
      //paging
      this.pages = [];
      this.pagingInfo = res.data.pagingInfo;
      var countOfPageNumbers = Math.ceil(this.pagingInfo.CountOfTotalProducts / this.pagingInfo.CountOfProductsInEachPage)
      var startPage = this.pagingInfo.pageId - 3 <= 0 ? 1 : this.pagingInfo.pageId - 3;
      var endPage = this.pagingInfo.pageId + 3 > countOfPageNumbers ? countOfPageNumbers : this.pagingInfo.pageId + 3;
      for (let i = startPage; i <= endPage; i++)
        this.pages.push(i)
      //endOfPaging


    })
  }
  //setPageId
  setPageId(page: number) {
    this.productFilter = new ProductFilter(page, 0, 0, "", ProductOrder.Asc, []);
    this.getProducts();

  }
  //endOfSetPageId

  getProductForEdit(id: number) {
    this.router.navigate(['edit-product'], { queryParams: { id: id } });

  }

  delete(id: number) {
    this.productService.delete(id).subscribe(res => {
      console.log(res.data);
    })
  }

}
