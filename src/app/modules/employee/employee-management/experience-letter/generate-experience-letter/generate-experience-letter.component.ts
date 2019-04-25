import { Component, OnInit } from '@angular/core';
import { GenerateLetter } from '../modals/generate-letter.modal';
import { GenerateLetterService } from '../services/generate-letter.service';

@Component({
  selector: 'app-generate-experience-letter',
  templateUrl: './generate-experience-letter.component.html',
  styleUrls: ['./generate-experience-letter.component.css']
})
export class GenerateExperienceLetterComponent implements OnInit {

  generateLetter : GenerateLetter[];
  generateLetterObj= new GenerateLetter();
  msg:any;

  constructor(private generateLetterService:GenerateLetterService) { }

  ngOnInit() {
    // this.getGenerateLetter();
  }

  // getGenerateLetter(){
  //   this.generateLetterService.getAllLetter().subscribe(data=>{
  //     this.generateLetter=data;
  //     this.dataSource = new MatTableDataSource<any>(data);
  //     this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //     console.log(data);
  //   })
  //   }
    
createLetter(){
  this.generateLetterService.createLetter(this.generateLetterObj).subscribe(data=>{
    console.log(data);
    this.msg="created ";
    // this.getGenerateLetter();
  })
}

deleteId(generateLetter){
  console.log(generateLetter);
  this.generateLetterObj=Object.assign({},this.generateLetterObj);
}
deleteLetter(){
  this.generateLetterService.deleteLetter(this.generateLetterObj).subscribe(data=>{
    console.log(data);
    this.msg="Delated successfully";
    // this.getGenerateLetter();
  })
}
updateLetter(){
  this.generateLetterService.updateLetter(this.generateLetterObj).subscribe(data=>{
    console.log(data);
    this.msg="updated successfully";
    // this.getGenerateLetter;
  })
}

  public printComponentx() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }

  public printComponent(){
    var content = document.getElementById("print-div").innerHTML;
    var mywindow = window.open('', '', 'height=650,width=1200');

    mywindow.document.write('<html><head><title>Print</title>');
    mywindow.document.write('</head><body style="line-height:40px; font-family:calibri">');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
  }
}

