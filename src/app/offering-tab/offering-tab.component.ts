import { Component, OnInit } from '@angular/core';
import { AllDataService } from './../all-data.service';
import { Report } from "./../report";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-offering-tab',
  templateUrl: './offering-tab.component.html',
  styleUrls: ['./offering-tab.component.css']
})
export class OfferingTabComponent implements OnInit {
  	specificEmployees: any[] = [];
	showEmployees(event, item:any):void {
	    this.specificEmployees = item;
	    event.currentTarget.parentNode.querySelector("li").classList.remove('ibm-highlight');
	}
  	reports: Report[];
	constructor(private newService: AllDataService) {}
	ngOnInit() {    
		this.getData();
	}
	public getData(): void {
		this.newService.fetchData().subscribe(res=>{
                                  this.reports = res;
                                })
	}
}