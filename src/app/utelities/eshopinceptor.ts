import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { DomainName } from "./pathtool";
import { CookieService } from "ngx-cookie-service";
import { Injectable } from "@angular/core";
@Injectable({providedIn:'root'})
export class EShopInterceptor implements HttpInterceptor{
    constructor(public cookieService:CookieService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var myRequest=req.clone({
            url:DomainName+req.url,
         headers:req.headers.append('Authorization',"bearer " +this.cookieService.get("Eshop"))
        })
        return next.handle(myRequest);
    }
}