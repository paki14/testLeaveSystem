import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-promotion-denied-history',
  templateUrl: './edit-promotion-denied-history.component.html',
  styleUrls: ['./edit-promotion-denied-history.component.css']
})
export class EditPromotionDeniedHistoryComponent implements OnInit {

  editpromotiondenied: FormGroup;
  constructor() {
  this.editpromotiondenied = new FormGroup({
    'denID': new FormControl,
    'reqId': new FormControl,
    'desiid':new FormControl,
    'positionname': new FormControl,
    'denieddate': new FormControl,
    'Deniedremark': new FormControl,
    'deniedby':new FormControl
    
  })
  }

  ngOnInit() {
  }

}
