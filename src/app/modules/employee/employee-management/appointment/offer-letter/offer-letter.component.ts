import { Component, OnInit } from '@angular/core';
import { OfferLetter } from './offer-letter.model';
import { OfferLetterService } from './offer-letter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-letter',
  templateUrl: './offer-letter.component.html',
  styleUrls: ['./offer-letter.component.css']
})
export class OfferLetterComponent implements OnInit {
  
  offerLetterdata:OfferLetter=new OfferLetter();

  constructor(private offerLetterService:OfferLetterService) { }

  ngOnInit() {
    this.pushData();
  }

  offerForm=new FormGroup({
    offerDate: new FormControl('', Validators.compose([
        Validators.required
      ])),
    
  })
  pushData(){
    console.log(this.offerLetterdata);
    this.offerLetterService.putData(this.offerLetterdata);
  }

}
