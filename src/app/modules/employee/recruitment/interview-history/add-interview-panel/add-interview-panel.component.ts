import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-interview-panel',
  templateUrl: './add-interview-panel.component.html',
  styleUrls: ['./add-interview-panel.component.css']
})
export class AddInterviewPanelComponent implements OnInit {

  
  interviewpanel:FormGroup;

  ngOnInit(){
    
  }
  
  constructor(){
    this.interviewpanel=new FormGroup({
      'interviewPanelNo':new FormControl,
      'InterviewDate':new FormControl,
      'interviewStartTime':new FormControl,
      'interviewEndTime':new FormControl,
      'datas':new FormArray([
        this.dataArrayFunction(),
       ]),
       'datasinterviewrs':new FormArray([
        this.dataArrayInterviewersFunction(),
       ])


      
    })
  }

  dataArrayFunction(){
    return new FormGroup({
      'applicantsName':new FormControl(),
      'reachedCall':new FormControl(),
      'attended':new FormControl(),
      'interviewscorecard':new FormControl(),
      'selected':new FormControl(),
      'reasonforhire':new FormControl()
    })
  }

  dataArrayInterviewersFunction(){
    return new FormGroup({
      'interviewrs':new FormControl(),
      
    })
  }

  addData(){
    let dataArray=this.interviewpanel.get('datas') as FormArray;
    dataArray.push(this.dataArrayFunction())
  }

  removeData(id){
    //alert(id)
    let dataArray=this.interviewpanel.get('datas') as FormArray;
    dataArray.removeAt(id);
  }

  removeInterviewrs(interid){
    //alert(id)
    let dataArray=this.interviewpanel.get('datasinterviewrs') as FormArray;
    dataArray.removeAt(interid);
  }

  addDatainterviewrs(){
    let dataArray=this.interviewpanel.get('datasinterviewrs') as FormArray;
    dataArray.push(this.dataArrayInterviewersFunction())
  }
}