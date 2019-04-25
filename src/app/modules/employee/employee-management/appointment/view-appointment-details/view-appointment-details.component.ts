import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppoinmentDetailsService } from '../appointment-details/appoinment-details.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-view-appointment-details',
  templateUrl: './view-appointment-details.component.html',
  styleUrls: ['./view-appointment-details.component.css']
})
export class ViewAppointmentDetailsComponent implements OnInit {
  constructor(private router: Router,
    private appointmentService: AppoinmentDetailsService,
    
  ) { }
  
  appointmentDetails: Appointment[];
  
  
  ngOnInit() {
    this.GetAppointmentDetails();
    
    }
      
      GetAppointmentDetails() {
        this.appointmentService.viewAppointmentDetails().subscribe(data => {
          console.log(data);
          this.appointmentDetails = data;
        })
      }

   
}
