import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-welfare-and-motivation',
  templateUrl: './welfare-and-motivation.component.html',
  styleUrls: ['./welfare-and-motivation.component.css']
})
export class WelfareAndMotivationComponent implements OnInit {
  info: { token: string; username: string; authorities: string[]; };

  constructor(private token:TokenStorageService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

}
