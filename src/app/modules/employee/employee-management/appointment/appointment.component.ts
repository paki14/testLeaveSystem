import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private router:Router , private token: TokenStorageService) { }
  
  info: any;
  role: string;
  roles: string[] = [];
  isRole=true;
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
  }
 
  
  goGeneralInfo() {
    
    this.router.navigate(['appointment/appointmentInformation/generalInfo']); 
  }
}
