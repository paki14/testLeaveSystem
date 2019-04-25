import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-grade',
  templateUrl: './view-grade.component.html',
  styleUrls: ['./view-grade.component.css']
})
export class ViewGradeComponent implements OnInit {
  displayedColumns: string[] = ['gradeId', 'gradeV','gradeValue','editGrade','deleteGrade'];

  gradeId = [
    { 'gradeId':'1', 'gradeV':'A','gradeValue':'75 ≥','editGrade':'edit','deleteGrade':'delete'},
    { 'gradeId':'2', 'gradeV':'B','gradeValue':'65 - 75','editGrade':'edit','deleteGrade':'delete'},
    { 'gradeId':'3', 'gradeV':'C','gradeValue':'55 - 65','editGrade':'edit','deleteGrade':'delete'},
    { 'gradeId':'4', 'gradeV':'D','gradeValue':'55 ≤','editGrade':'edit','deleteGrade':'delete'} 
  ]
  dataSource = new MatTableDataSource<any>(this.gradeId);
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.gradeId);
  }
}
