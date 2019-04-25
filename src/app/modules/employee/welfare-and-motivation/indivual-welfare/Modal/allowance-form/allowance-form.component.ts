import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-allowance-form',
  templateUrl: './allowance-form.component.html',
  styleUrls: ['./allowance-form.component.css']
})
export class AllowanceFormComponent implements OnInit {

  addallowance: FormGroup;
  constructor() {
    this.addallowance = new FormGroup({
      //'id' : new FormControl,
      'id' : new FormControl,
      'name':new FormControl,
      'allowance':new FormControl,
    })
  }
  ngOnInit() {
  }

}
