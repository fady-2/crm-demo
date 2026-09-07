import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OwnerPageComponent } from "./features/owner-page/owner-page.component";
import { Brokers } from './features/brokers/brokers';
import { Leads } from "./features/lead/leads";
import { HeaderComponent } from "./features/owner-page/header.component/header.component";
import { HeaderLeadsComponent } from "./features/lead/component/lead-header/header-leads.component/header-leads.component";
import { TableComponent } from "./features/owner-page/table.component/table.component";
import { LeadTableComponent } from './features/lead/component/lead-table/lead-table.component/lead-table.component';
// import { LeadTableComponent } from "./features/lead/component/lead-table/lead-table.component/lead-table.component";

@Component({
  selector: 'app-root',
  imports: [Leads, OwnerPageComponent, HeaderComponent, HeaderLeadsComponent, TableComponent, LeadTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crm-demo');
}
