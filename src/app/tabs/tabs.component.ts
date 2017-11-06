import { Component, OnInit } from '@angular/core';
import { ManagerTabComponent } from '../manager-tab/manager-tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
	//@Input() specificEmployees;
  specificEmployees: Object;
	showEmployees(item:any):void {
      this.specificEmployees = item;
      alert(JSON.stringify(this.specificEmployees));
  }

  constructor() { }

  ngOnInit() {
  }

}
