import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-par-home',
  templateUrl: './par-home.component.html',
  styleUrls: ['./par-home.component.css']
})
export class ParHomeComponent implements OnInit {

    
    constructor(private token: TokenStorageService) { }
    info: any;
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

}
