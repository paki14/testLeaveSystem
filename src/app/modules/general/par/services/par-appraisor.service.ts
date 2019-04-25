import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParAppraisor } from '../models/par-appraisor.model';

@Injectable({
  providedIn: 'root'
})
export class ParAppraisorService {

  constructor(private http: HttpClient) { }
  private parappraisorUrl = 'http://localhost:8081/hrm_system/parappraisor';

public getParAppraisor(){
  return this.http.get<ParAppraisor[]>(this.parappraisorUrl);

}
public deleteParAppraisor(parAppraisor) {
  return this.http.delete<ParAppraisor>(this.parappraisorUrl + '/' + parAppraisor.id, parAppraisor);
}

public addParAppraisor(parAppraisor) {
  return this.http.post<ParAppraisor>(this.parappraisorUrl, parAppraisor);
}

public updateParAppraisor(parAppraisor) {
  return this.http.put<ParAppraisor>(this.parappraisorUrl + '/' + parAppraisor.id,parAppraisor);
}

}
