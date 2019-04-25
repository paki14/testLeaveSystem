import { Component, OnInit } from '@angular/core';
import { Availability } from 'src/app/modules/trainer/Model/availability';
import { AvailabilityService } from 'src/app/modules/trainer/Service/availability.service';

@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
  styleUrls: ['./add-availability.component.css']
})
export class AddAvailabilityComponent implements OnInit {
  AvailabilityObj = new Availability();
  availability: any;

  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit() {
  }
  addTrainingHistory() {
    this.availabilityService.createAvailability(this.AvailabilityObj).subscribe(data => {
      alert("Training History added");
    });
  }

}
