import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-general-welfare',
  templateUrl: './edit-general-welfare.component.html',
  styleUrls: ['./edit-general-welfare.component.css']
})
export class EditGeneralWelfareComponent implements OnInit {

  editgeneralWelfare: FormGroup;
  constructor() {
    this.editgeneralWelfare = new FormGroup({
      'wid' : new FormControl,
      'editgfName':new FormControl,
      'editalloName':new FormControl
      
    })
  }

  ngOnInit() {
  }

}