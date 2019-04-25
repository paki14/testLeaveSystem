import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private token: TokenStorageService,
    private interactionSer:InteractionService) { }
  
  info: any;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    
  }

  onClick(roleName){
    this.interactionSer.pushRouteRole(roleName);
    // alert(roleName);
  }
}
