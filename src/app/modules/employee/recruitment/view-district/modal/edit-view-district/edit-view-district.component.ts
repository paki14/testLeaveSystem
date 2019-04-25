import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../../../Service/district.service';
import { District } from '../../../Modal/district';

@Component({
  selector: 'app-edit-view-district',
  templateUrl: './edit-view-district.component.html',
  styleUrls: ['./edit-view-district.component.css']
})
export class EditViewDistrictComponent implements OnInit {
  districtObj: District = new District();
  district: District[];
  
  msg:any;
  constructor(private districtService:DistrictService) { }

  ngOnInit() {
    this.getAllDistrict()
  }
  getAllDistrict() {
    this.districtService.getAllDistrict().subscribe(data => {
    this.district = data;
    console.log(data);
    });
}
editDistrict(district) {
  console.log(district);
  this.districtObj = Object.assign({}, district);
}


updateDistrictById() {
  this.districtService.updateDistrict(this.districtObj).subscribe(data => {
   // alert("District Updated Sucessfully");
    this.getAllDistrict();
  });
}
}
