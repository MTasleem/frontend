import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {
  public url = 'https://pacific-thicket-78881.herokuapp.com/api/';
  // public url = 'http://localhost:8081/api/';
  
  constructor(private http: Http) { }

  saveUser(user) {
    return this.http.post(this.url + 'saveUser/', user)
      .map((response: Response) => response.json())
  }

  getUser() {
    return this.http.get(this.url + 'getUser')
      .map((response: Response) => response.json())
  }
  deleteUser(id) {
    return this.http.post(this.url + 'deleteUser/', { 'id': id })
      .map((response: Response) => response.json())
  }

}