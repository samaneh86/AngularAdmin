import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../Dtos/currentUser';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  currentUser: CurrentUser = null as any;
  constructor(public authService: AuthService, public cookieService:CookieService) { }


  ngOnInit() {
    this.authService.getCurentUser().subscribe(res => {
      this.currentUser = res
    })
  }
  logout(){
    this.authService.logout().subscribe(res => {
      console.log(res.data)
      console.log(res.data);
      this.cookieService.delete("Eshop");
        this.authService.setCurrentUser(null as any);
        
        
  

    })
  }

}
