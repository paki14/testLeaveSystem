import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/models/self-service/response';
import { SelfService } from 'src/app/models/self-service/self-service';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }
  private responseAPI = "http://localhost:8080/hrm_system/response";
  // private responseViewUrl="http://localhost:8080/hrm_system/selfservice";

  // public getAllResponse() {
  //   return this.http.get<SelfService[]>(this.responseViewUrl);
  // }
 
  public createResponse(response: Response) {
    return this.http.post<Response>(this.responseAPI, response);
  }
  public getResponse(){
      return this.http.get<Response[]>(this.responseAPI)
    }
  }
  

