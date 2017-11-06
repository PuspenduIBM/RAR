import { Component, OnInit, NgModule, Input } from '@angular/core';
import { AllDataService } from './../all-data.service';
import { ManagerTabComponent } from '../manager-tab/manager-tab.component';
import { FiltersComponent } from '../filters/filters.component';
//import { TabsComponent } from '../tabs/tabs.component';
import { Report } from "./../report";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  specifiedMonth; specifiedQuarter: Object;
  /*todayDate; todayMonth: string = "";
  let monthNames: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];*/
  showEmployees(item:any):void {      
      this.specifiedMonth = item;      
      //alert(this.specifiedMonth);
      /*this.todayDate = new Date();
      this.todayMonth = this.todayDate.getMonth();
      alert(this.todayMonth);
      alert(monthNames[this.todayMonth]);*/
  }
  showEmployeesFromQuarter(item:any):void {      
      this.specifiedQuarter = item;      
      //alert(this.specifiedQuarter);
  }
  
  statusPopup; statusPopupBack; statusTheadTbody; statusQuarterHeading1; statusQuarterHeading2; statusQuarterHeading3; statusQuarterListing1; statusQuarterListing2; statusQuarterListing3: string = "";
  specificReport: Object;
  onMouseOver1(): void {
    this.statusTheadTbody = "active";
    this.statusQuarterHeading1 = "activeHeading";
    this.statusQuarterListing1 = "activeListing";
  }
  onMouseOut1(): void {
    this.statusTheadTbody = "";
    this.statusQuarterHeading1 = "";
    this.statusQuarterListing1 = "";
  }
  onMouseOver2(): void {
    this.statusTheadTbody = "active";
    this.statusQuarterHeading2 = "activeHeading";
    this.statusQuarterListing2 = "activeListing";
  }
  onMouseOut2(): void {
    this.statusTheadTbody = "";
    this.statusQuarterHeading2 = "";
    this.statusQuarterListing2 = "";
  }
  onMouseOver3(): void {
    this.statusTheadTbody = "active";
    this.statusQuarterHeading3 = "activeHeading";
    this.statusQuarterListing3 = "activeListing";
  }
  onMouseOut3(): void {
    this.statusTheadTbody = "";
    this.statusQuarterHeading3 = "";
    this.statusQuarterListing3 = "";
  }
  showOverlay(item:any):void {    
    this.specificReport = item;
    //alert(JSON.stringify(this.specificReport));
    this.statusPopup = "activePopup";
    this.statusPopupBack= "activePopupBack";
  }
  hideOverlay():void {    
    this.statusPopup = "";
    this.statusPopupBack= ""
  }
  /*timeWiseData():void {
    if(this.specifiedMonth == 'all')
        return this.specifiedMonth;
        //alert(this.specifiedMonth);
  }*/
  reports: Report[];
  constructor(private newService: AllDataService) {}

  ngOnInit() {    
    this.getData();
  }
  public getData(): void {
    this.newService.fetchData().subscribe(res=>{
                                  this.reports = res;
                                  //alert(JSON.stringify(this.reports));      
                                })
  }
}