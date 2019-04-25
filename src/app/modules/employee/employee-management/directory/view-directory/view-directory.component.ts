import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DirectorySearch } from 'src/app/models/directory-search';
import { DirectoryService } from 'src/app/services/directory/directory.service';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

export interface DirectoryView {
  userId: Number;
  fullName: string;
  contact: string;
  email: string;
  permenentAddress: string;
  designation: string;
  appointmentDate: Date;
  servicePeriod: Number;
}

@Component({
  selector: 'app-view-directory',
  templateUrl: './view-directory.component.html',
  styleUrls: ['./view-directory.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ViewDirectoryComponent implements OnInit {
  role: string;
  info: any;
  disabledName = new FormControl(false);
  disabledDesig = new FormControl(false);
  disabledAppoint = new FormControl(false);
  directorySearch: DirectorySearch = new DirectorySearch();
  directorySearchSend: DirectorySearch = new DirectorySearch();
  directoryView: DirectoryView[];
  // columnsToDisplay: string[] = ['fullName', 'designation', 'contact','appointmentDate'];
  // dataSource = new MatTableDataSource(this.directoryView);
  constructor(private dirServises: DirectoryService) {
  }

  ngOnInit() {
    this.dirServises.viewAllUsers().subscribe(data => {
      this.directoryView = data;
    });
  }

  search() {
    if (this.directorySearch.fullName === '' || this.disabledName.value == false) {
      this.directorySearch.fullName = null;
    }
    if (this.directorySearch.designation === '' || this.disabledDesig.value == false) {
      this.directorySearch.designation = null;
    }
    if(this.disabledAppoint.value == false){
      this.directorySearch.appointmentDate = null;
    }

    if(this.directorySearch.fullName != null){
      this.directorySearchSend.fullName = this.directorySearch.fullName.toLowerCase();
    }
    if(this.directorySearch.designation != null){
      this.directorySearchSend.designation = this.directorySearch.designation.toLowerCase();      
    }
    this.directorySearchSend.appointmentDate = this.directorySearch.appointmentDate;

    // console.log(this.directorySearch);
    this.dirServises.viewUsers(this.directorySearchSend).subscribe(data => {
      this.directoryView = data;
      // console.log(this.directoryView);
    });
  }

}

