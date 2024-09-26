import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormData } from '../Dtos/loginFormData';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { CurrentUser } from '../Dtos/currentUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = null as any;
  loginFormData: LoginFormData = null as any;
  constructor(public authService: AuthService, public alertController: AlertController, public router: Router, public cookieService: CookieService) { }
  currentUser: CurrentUser = null as any;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
    })
  }
  submitLoginForm() {

    this.loginFormData = new LoginFormData(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value,
    );
    this.authService.login(this.loginFormData).subscribe(res => {
      

      
      if (res.status == "Success") {
      
        this.cookieService.set("Eshop", res.data.tokenString, res.data.expire*30);
        this.currentUser = new CurrentUser(
          res.data.firstName,
          res.data.lastName,
          res.data.email,
          res.data.userId,

        );
        this.authService.setCurrentUser(this.currentUser);
      console.log(res);
      console.log("currentUser:",this.currentUser);
      this.router.navigate(['home'])
      }

      else
        this.alertController.create({
          header:"ناموفق",
          message: "شما ادمین سایت نیستید",
          buttons: ["ok"]
        })
         
    });
    
  }
}
