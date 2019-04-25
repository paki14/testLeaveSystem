import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from 'src/app/models/login/login-info';
import { AuthService } from 'src/app/services/login/auth.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);
    
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  fixPositionUsername() {
    var usernameElement = document.getElementById("username");
    if (this.form.username != "") {
      usernameElement.classList.add("has-val");
    }
    else{
      usernameElement.classList.remove("has-val");
    }
  }

  fixPositionPassword(){
    var passwordElement = document.getElementById("password"); 
    if (this.form.password != "") {
      passwordElement.classList.add("has-val");
    }
    else{
      passwordElement.classList.remove("has-val");
    }
  }
}
