import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImagePickerComponent } from '../image-picker/image-picker.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
 
  ],
  exports:[ImagePickerComponent],
  declarations: [ImagePickerComponent],
  providers:[NgxImageCompressService]
})
export class ProductsPageModule {}
