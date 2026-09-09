import { Component } from '@angular/core';
import { LeadTableComponent } from './component/lead-table/lead-table.component/lead-table.component';
import { LeadTabsComponent } from './component/Lead-tabs/lead-tabs.component/lead-tabs.component';
import { LeadSearch } from './component/lead-search/lead-search/lead-search';
import { HeaderLeadsComponent } from './component/lead-header/header-leads.component/header-leads.component';
import { LeadFilter } from "./component/lead-filter/lead-filter/lead-filter";
import { LeadPrint } from "./component/lead-print/lead-print/lead-print";
import { LeadExport } from "./component/lead-export/lead-export/lead-export";
import { LeadSave } from "./component/lead-save/lead-save/lead-save";

@Component({
  selector: 'app-leads',
  imports: [LeadTableComponent, LeadTabsComponent, LeadSearch, HeaderLeadsComponent, LeadFilter, LeadPrint, LeadExport, LeadSave],
  templateUrl: './leads.html',
  styleUrl: './leads.scss',
})
export class Leads {

}
