import { Component } from '@angular/core';
import { LeadTableComponent } from './component/lead-table/lead-table.component/lead-table.component';
import { LeadTabsComponent } from './component/Lead-tabs/lead-tabs.component/lead-tabs.component';
import { LeadSearch } from './component/lead-search/lead-search/lead-search';
import { HeaderLeadsComponent } from './component/lead-header/header-leads.component/header-leads.component';
import { HeaderComponent } from "../owner-page/header.component/header.component";
import { LeadFilter } from "./component/lead-filter/lead-filter/lead-filter";

@Component({
  selector: 'app-leads',
  imports: [LeadTableComponent, LeadTabsComponent, LeadSearch, HeaderLeadsComponent, LeadFilter],
  templateUrl: './leads.html',
  styleUrl: './leads.scss',
})
export class Leads {

}
