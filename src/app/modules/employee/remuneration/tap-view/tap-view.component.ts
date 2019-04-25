import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../../services/login/token-storage.service';

@Component({
  selector: 'app-tap-view',
  templateUrl: './tap-view.component.html',
  styleUrls: ['./tap-view.component.css']
})
export class TapViewComponent implements OnInit {

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
