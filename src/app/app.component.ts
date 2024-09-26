import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CurrentUser } from './Dtos/currentUser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentUser: CurrentUser = null as any;
  constructor(@Inject(DOCUMENT) public document: Document, public authService: AuthService) {

    this.document.documentElement.dir = "rtl"
  }
  ngOnInit() {
    this.authService.checkAuthenticate().subscribe(res => {
      this.currentUser = res.data;
      this.authService.setCurrentUser(this.currentUser);
    })
  }
}
