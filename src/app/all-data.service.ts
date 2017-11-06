import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Report } from "./report";
import 'rxjs/add/operator/map';

@Injectable()
export class AllDataService {
  constructor(private http: Http) { }
  fetchData() {
  	return this.http.get("http://localhost:7000/push").map(
  		(response) => response.json() as Report[]
    /*return this.http.get("http://jsonplaceholder.typicode.com/users").map(
      (response) => response.json() as Report[]
    return this.http.get("assets/ibm-employees.json").map(
      (response) => response.json() as Report[]*/
  	)
  }
  success(){
  	return "successful";
  }
}