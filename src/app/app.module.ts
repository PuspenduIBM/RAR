import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AllDataService } from './all-data.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { OfferingTabComponent } from './offering-tab/offering-tab.component';
import { ManagerTabComponent } from './manager-tab/manager-tab.component';
import { AvailabilityComponent } from './availability/availability.component';

//import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    FiltersComponent,
    SearchResultsComponent,
    OfferingTabComponent,
    ManagerTabComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //MultiselectDropdownModule,
    RouterModule.forRoot ([
      {
        path:'',
        component:OfferingTabComponent
      },
      {
        path:'manager',
        component:ManagerTabComponent
      }
    ])
  ],
  providers: [AllDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
