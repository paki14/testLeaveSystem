import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rating-star-comp',
  templateUrl: './rating-star-comp.component.html',
  styleUrls: ['./rating-star-comp.component.css']
})
export class RatingStarCompComponent implements OnInit {

  @Input('rating') rating:number;
 
  ratingArr=[
    {rateName:'low',star:1},
    {rateName:'moderate',star:2},
    {rateName:'ok',star:3},
    {rateName:'high',star:4},
    {rateName:'exceptional',star:5},
  ]
  constructor() { }

  ngOnInit() {
  
  }



}
