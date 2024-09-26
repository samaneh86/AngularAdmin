import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { EShopInterceptor } from './utelities/eshopinceptor';
import { CookieService } from 'ngx-cookie-service';
import { HeaderPage } from './header/header.page';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({animated:false}), AppRoutingModule],
  providers: [
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CookieService,provideHttpClient(),
     provideHttpClient(withInterceptorsFromDi()),
   {provide:HTTP_INTERCEPTORS,useClass:EShopInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
