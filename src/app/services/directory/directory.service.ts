import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DirectorySearch } from 'src/app/models/directory-search';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/hrm_system/directory'; 
  public viewUsers(directorySearch) {
    return this.http.post<any[]>(this.baseUrl, directorySearch);
  }

  public viewAllUsers() {
    return this.http.get<any[]>(this.baseUrl);
  }

}
