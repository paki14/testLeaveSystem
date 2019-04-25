import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-general-infomation',
  templateUrl: './view-general-infomation.component.html',
  styleUrls: ['./view-general-infomation.component.css']
})

export class ViewGeneralInfomationComponent implements OnInit {

 
  // employees: Profile[] = [
  //   {
  //     empName: 'john',
  //     empId: 1,
  //     gender: 'male',
  //     email: 'john11@gmail',
  //     contactNo: '0777725654',
  //     address: 'jaffna',
  //     appointDate: new Date('10/02/2018'),
  //     role: 'accountant',
  //     photoPath: '../../../../../../assets/images/john.jfif',
  //     nationality: 'Srilankan Tamil',
  //     nic: '921961464v',
  //     religion: 'Hindu',
  //     dateOfBirth: new Date('12/02/2018'),
  //     addressR: 'jaffna',
  //     contactNoR: '0212222456',
  //     maritalStatus: 'Single',
  //     basicSalary: '40000',
  //     blg:'O+'
  //   }
  // ]
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoNext() {
    this.router.navigate(['/profile/academicQual']);
  }
  goBack() {
    this.router.navigate(['/profile/empprofile']);
  }

}
