import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AllDataService } from './../all-data.service';
import { Report } from "./../report";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-manager-tab',
  templateUrl: './manager-tab.component.html',
  styleUrls: ['./manager-tab.component.css']
})
export class ManagerTabComponent implements OnInit {
	@Output() selectedManager: EventEmitter<string> = new EventEmitter<string>();
	//specificEmployees: Object;
	specificEmployees: any[] = [];
	showEmployees(event, item:any):void {
	    this.specificEmployees = item;
	    //alert(JSON.stringify(this.specificEmployees));	    
	    event.currentTarget.parentNode.querySelector("li").classList.remove('ibm-highlight');
	    this.selectedManager.emit(item);
	    //alert(JSON.stringify(this.selectedManager));
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
