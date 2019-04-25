import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-track-project',
  templateUrl: './track-project.component.html',
  styleUrls: ['./track-project.component.css']
})
export class TrackProjectComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  editField: string;
  personList: Array<any> = [
    { ProjectName: 'aaaaaaaaga', Date: "12/2/1998", status: 'finished' },
   
  ];

  awaitingPersonList: Array<any> = [
    {  ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished' },
    { ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished' },
    { ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished' },
    { ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished'},
    {  ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished' },
    { ProjectName: 'aaaaaaa', Date: "12/2/1998", status: 'finished' },
    { ProjectName: 'aaaaaaaaa', Date: "12/2/1998", status: 'finished' },
    { ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished'},
    { ProjectName: 'aaaaaaaa', Date: "12/2/1998", status: 'finished'},
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
