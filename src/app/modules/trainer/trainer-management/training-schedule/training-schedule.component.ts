import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainingSchedule } from '../../Model/training-schedule';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TrainingScheduleService } from '../../Service/training-schedule.service';

@Component({
  selector: 'app-training-schedule',
  templateUrl: './training-schedule.component.html',
  styleUrls: ['./training-schedule.component.css']
})
export class TrainingScheduleComponent implements OnInit {

  trainingScheduleObj: TrainingSchedule = new TrainingSchedule();
  training: any;
  dataSource = new MatTableDataSource<any>(this.training);


  displayedColumns: string[] = ['id',  'trainingTopic', 'date', 'totalCoveredHours', 'edit/delete'];
 




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingScheduleService: TrainingScheduleService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllTrainingSchedule();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  getAllTrainingSchedule() {
    this.trainingScheduleService.getAllTrainingSchedule().subscribe(data => {
      this.training = data;
      this.dataSource = new MatTableDataSource<any>(this.training);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  console.log(data);
    });
  }


  addTrainingSchedule() {
    this.trainingScheduleService.createTrainingSchedule(this.trainingScheduleObj).subscribe(data => {
      alert("Training Schedule added");
    });
  }

  editTrainingSchedule(trainingschedule) {
    console.log(trainingschedule);
    this.trainingScheduleObj = Object.assign({}, trainingschedule);
  }


  updateTrainingHistory() {
    this.trainingScheduleService.updateTrainingSchedule(this.trainingScheduleObj).subscribe(data => {
      alert("trainingSchedule Updated Sucessfully");
      this.getAllTrainingSchedule();
    });
  }
  deleteTrainingHistory(trainingschedule) {
    console.log(trainingschedule);
    this.trainingScheduleService.deleteTrainingSchedule(trainingschedule).subscribe(data => {

      this.getAllTrainingSchedule();

    });
  }

}
