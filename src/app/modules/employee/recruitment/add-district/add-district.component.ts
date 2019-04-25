import { Component, OnInit } from '@angular/core';
import { District } from '../Modal/district';
import { DistrictService } from '../Service/district.service';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.css']
})
export class AddDistrictComponent implements OnInit {


districtObj: District = new District();
  district: District[];
  constructor(private districtService: DistrictService) { }

  ngOnInit() {
     this.getDistrict()
  }
  getDistrict() {
    this.districtService.getAllDistrict().subscribe(data => {
      console.log(data);
      this.district = data;
    });
  }
  createDistrict() {
    
    this.districtService.createDistrict(this.districtObj).subscribe(data => {
      console.log(data);
      this.getDistrict();
    });
  }
  
  }
  //Assign to datas in Delete Model and Edit Model
  
  
 

