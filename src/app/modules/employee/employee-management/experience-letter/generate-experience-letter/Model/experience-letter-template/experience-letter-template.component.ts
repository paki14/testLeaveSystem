import { Component, OnInit } from '@angular/core';
import { GenerateLetter } from '../../../modals/generate-letter.modal';
import { GenerateLetterService } from '../../../services/generate-letter.service';

@Component({
  selector: 'app-experience-letter-template',
  templateUrl: './experience-letter-template.component.html',
  styleUrls: ['./experience-letter-template.component.css']
})
export class ExperienceLetterTemplateComponent implements OnInit {

  generateLetter :GenerateLetter[];
  generateLetterObj=new GenerateLetter();
  msg:any;

  constructor(private generateLetterService:GenerateLetterService) { }

  ngOnInit() {
    this.getGenerateLetter();
  }
  getGenerateLetter(){
    this.generateLetterService.getAllLetter().subscribe(data=>{
      this.generateLetter=data;
      console.log(data);
    })
  }
   
    createGenerateLetter(){
    // alert("Test");
    this.generateLetterService.createLetter(this.generateLetterObj).subscribe(data=>{
    
      console.log(data);
      // alert("role created");
      this.msg="Data created successfully";
      this.getGenerateLetter();
    });
  }
  deleteId(generateLetter){
    // alert(this.statusObj.id);
    console.log(generateLetter);
    this.generateLetterObj=Object.assign({},generateLetter);
  }

  deleteLetter(){
    this.generateLetterService.deleteLetter(this.generateLetterObj).subscribe(data=>{
      this.msg="Data deleted successfully";
      this.getGenerateLetter();
    });
  }

  updateLetter(){
    this.generateLetterService.updateLetter(this.generateLetterObj).subscribe(data=>{
      console.log(data);
      this.msg="Data updated successfully";
      this.getGenerateLetter();
    })
  }

}
