import { Component, OnInit } from '@angular/core';
import { RequestLetter } from '../modals/request-letter.modal';
import { RequestLetterService } from '../services/request-letter.service';

@Component({
  selector: 'app-request-experience-letter',
  templateUrl: './request-experience-letter.component.html',
  styleUrls: ['./request-experience-letter.component.css']
})
export class RequestExperienceLetterComponent implements OnInit {

  requestLetter : RequestLetter[];
  requestLetterObj= new RequestLetter();
  msg:any;
  constructor(private requestLetterService:RequestLetterService) { }

  ngOnInit() {
    this.getRequestLetter();
  }

  public printComponent() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }

getRequestLetter(){
this.requestLetterService.getAllRequestLetter().subscribe(data=>{
  this.requestLetter=data;
  console.log(data);
})
}

createRequest(){
  this.requestLetterService.createRequestLetter(this.requestLetterObj).subscribe(data=>{
    console.log(data);
    this.msg="?_?";
    this.getRequestLetter();
  })
}
deleteId(requestLetter){
  console.log(requestLetter);
  this.requestLetterObj=Object.assign({},this.requestLetterObj);
}
deleteRequest(){
  this.requestLetterService.deleteRequestLetter(this.requestLetterObj).subscribe(data=>{
    console.log(data);
    this.msg="Delated successfully";
    this.getRequestLetter();
  })
}
updateRequest(){
  this.requestLetterService.updateRequestLetter(this.requestLetterObj).subscribe(data=>{
    console.log(data);
    this.msg="updated successfully";
    this.getRequestLetter;
  })
}
}
