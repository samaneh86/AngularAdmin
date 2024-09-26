import { productDto } from './../Dtos/productDto';
import { DomainName } from './../utelities/pathtool';
import { Component, OnInit } from '@angular/core';
import { EditDto } from '../Dtos/editDto';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { isPlatformBrowser } from '@angular/common';
import { ProductFilter } from '../Dtos/productFilter';
import { ProductOrder } from '../Dtos/productOrder';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  editData: EditDto = null as any;
  editForm: FormGroup = null as any;
  product: EditDto = null as any;
  id: number = 0;

  domainName = DomainName;
  static selectedImage: any;

  constructor(public productService: ProductService, public activatedRoute: ActivatedRoute, public router: Router) { }
  products: productDto[] = null as any;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = parseInt(params['id']);
    })
    this.productService.getProductById(this.id).subscribe(res => {
      this.product = res.data;
      console.log(this.product);
      this.editForm = new FormGroup({
        productName: new FormControl(this.product.productName),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description),
        shortDescription: new FormControl(this.product.shortDescription),
        productImage: new FormControl(this.product.productImage),
      })
    })

  }


  edit() {
    this.editData = new EditDto(
      this.product.id,
      this.editForm.controls['productName'].value,
      this.editForm.controls['price'].value,
      this.editForm.controls['productImage'].value,


      this.editForm.controls['shortDescription'].value,
      this.editForm.controls['description'].value,
      this.product.productImage,
      EditProductPage.selectedImage

    );
    this.productService.editForm(this.editData).subscribe(res => {
      this.editForm.reset();
      console.log(res);
      this.router.navigate(['products']);
      this.productService.getAllProduct(new ProductFilter(1, 0, 0, "", ProductOrder.Asc, [])).subscribe(res => {
        this.productService.setProducts(res.data.products);
      })
    })

  }
  chooseImage(event: any) {
    var file = event.target.files[0];
    var fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function () {

      EditProductPage.selectedImage = fr.result;
    }
  }


}
