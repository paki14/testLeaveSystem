import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-persons-info',
  templateUrl: './persons-info.component.html',
  styleUrls: ['./persons-info.component.css']
})
export class PersonsInfoComponent implements OnInit {
 constructor(private route:ActivatedRoute,private token: TokenStorageService,
  private interactionSer:InteractionService) { }

info:any
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
      
    };
    // this.getRoleRoute();
    // this.userrole;
  }
  // userrole:string
  // getRoleRoute(){
  //   this.interactionSer.profileObservable$.subscribe(data=>{
  //     this.userrole=data
  //     console.log(this.userrole)
  //   })

  // }
}
