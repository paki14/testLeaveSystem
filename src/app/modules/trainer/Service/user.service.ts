import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../Model/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpObj: HttpClient) { }
  private userUrl = "http://localhost:8100/hrm_system/user";


  getAllUser() {
    return this.httpObj.get<User[]>(this.userUrl);
  }
  createUser(userdata) {
    return this.httpObj.post<User>(this.userUrl, userdata);
  }

  deleteUser(userdata) {
    return this.httpObj.delete<User>(this.userUrl + "/" + userdata.id, userdata)
  }

  updateUser(userdata) {
    return this.httpObj.put<User>(this.userUrl + "/" + userdata.id, userdata)
  }
}
