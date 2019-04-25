import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-general-welfare',
  templateUrl: './add-general-welfare.component.html',
  styleUrls: ['./add-general-welfare.component.css']
})
export class AddGeneralWelfareComponent implements OnInit {
  generalWelfare: FormGroup;
  constructor() {
    this.generalWelfare = new FormGroup({
      //'id' : new FormControl,
      'gfName':new FormControl,
      'alloName':new FormControl,
    })
  }

  ngOnInit() {
  }

}
