import { Component, OnInit } from '@angular/core';
import { HighestQualification } from '../Modal/highest-qualification';
import { HighestQualificationService } from '../Service/highest-qualification.service';

@Component({
  selector: 'app-add-highest-qualification',
  templateUrl: './add-highest-qualification.component.html',
  styleUrls: ['./add-highest-qualification.component.css']
})
export class AddHighestQualificationComponent implements OnInit {

  highestQualificationObj: HighestQualification = new HighestQualification();
  highestQualification: HighestQualification[];
  constructor(private highestQualificationService: HighestQualificationService) { }

  ngOnInit() {
     this.getHighestQualification()
  }
  getHighestQualification() {
    this.highestQualificationService.getAllHighestQualification().subscribe(data => {
      console.log(data);
      this.highestQualification = data;
    });
  }
  createHighestQualification() {
    
    this.highestQualificationService.createHighestQualification(this.highestQualificationObj).subscribe(data => {
      console.log(data);
      this.getHighestQualification();
    });
  }
  
  }