import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
selector: 'app-add-interview-history',
  templateUrl: './add-interview-history.component.html',
  styleUrls: ['./add-interview-history.component.css']
})
export class AddInterviewHistoryComponent implements OnInit {
   
  interviewHistory:FormGroup;

  ngOnInit(){
    
  }
  
  constructor(){
    this.interviewHistory=new FormGroup({
      'jobTitle':new FormControl,
      'jobTitleId':new FormControl,
      'datas':new FormArray([
        this.dataArrayFunction(),
       ])


      
    })
  }

  dataArrayFunction(){
    return new FormGroup({
      'applicantsName':new FormControl(),
      'candidateType':new FormControl(),
      'selectedStatus':new FormControl(),
      'reason':new FormControl()
    })
  }

  addData(){
    let dataArray=this.interviewHistory.get('datas') as FormArray;
    dataArray.push(this.dataArrayFunction())
  }

  removeData(id){
    //alert(id)
    let dataArray=this.interviewHistory.get('datas') as FormArray;
    dataArray.removeAt(id);
  }
}