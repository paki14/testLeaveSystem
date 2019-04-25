import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OfferLetter } from './offer-letter.model';

@Injectable({
  providedIn: 'root'
})
export class OfferLetterService {

  constructor() { }
   
  private offerLetterObservable = new BehaviorSubject<OfferLetter>(null);
  offerLetterObservable$ = this.offerLetterObservable.asObservable();

  public putData(data: OfferLetter) {
    console.log("in service");
    this.offerLetterObservable.next(data);
    console.log(data);
  }

}
