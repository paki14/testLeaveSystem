import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferLetterService } from '../offer-letter.service';
import { OfferLetter } from '../offer-letter.model';

@Component({
  selector: 'app-generate-offer-letter',
  templateUrl: './generate-offer-letter.component.html',
  styleUrls: ['./generate-offer-letter.component.css']
})
export class GenerateOfferLetterComponent implements OnInit {

  constructor(private router: Router,private offerLetterService:OfferLetterService) { }
  letterDetails:OfferLetter=new OfferLetter();
  ngOnInit() {
    this.offerLetterService.offerLetterObservable$.subscribe(data=>{
      this.letterDetails=data;
    })
  }

  Back() {
    this.router.navigate(['/appointment/offerLetter']);

  }
 
  public printComponent() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }

  pullData(){
    this.offerLetterService.offerLetterObservable$.subscribe(data=>{
      this.letterDetails=data;
      console.log(data);
    })
  }
}
