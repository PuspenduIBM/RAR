import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AllDataService } from './../all-data.service';
import { Report } from "./../report";
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() selectedMonth: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedQuarter: EventEmitter<string> = new EventEmitter<string>();
  specific_quarter; specific_month: Object;
  onChange(itemQuarter:any): void {    
    this.specific_quarter = itemQuarter;
    this.selectedQuarter.emit(itemQuarter);
    //alert(JSON.stringify(this.specific_quarter));
    //alert(this.specific_quarter);
  }
  onChangeMonth(itemMonth:any): void {    
    this.specific_month = itemMonth;
    this.selectedMonth.emit(itemMonth);
    //alert(JSON.stringify(this.specific_month));
    //alert(this.specific_quarter);
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