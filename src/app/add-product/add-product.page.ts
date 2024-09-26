import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AddProductDto } from '../Dtos/addProductDto';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  addProductForm: FormGroup = null as any;
  product:AddProductDto = null as any;
  constructor(public productService: ProductService) { }
  ngOnInit() {
    this.addProductForm = new FormGroup({
      productName: new FormControl("", [Validators.required]),
      productPrice: new FormControl("", [Validators.required]),
      productImage: new FormControl("", [Validators.required]),
      productShortDescription: new FormControl("", [Validators.required]),
      productDescription: new FormControl("", [Validators.required])
    }

    );

  }
  send() {
    this.product = new AddProductDto(
      this.addProductForm.controls['productName'].value,
      this.addProductForm.controls['productPrice'].value,
      this.addProductForm.controls['productImage'].value,
      this.addProductForm.controls['productShortDescription'].value,
      this.addProductForm.controls['productDescription'].value

    );
    this.productService.addProduct(this.product).subscribe(res => {
      if (res.status == "Success")
        console.log(res.data)
      this.addProductForm.reset();
    });

  }
}