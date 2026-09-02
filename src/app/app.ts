import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLeadsComponent } from './core/layout/header/header-leads.component/header-leads.component';
import { LeadTabsComponent } from './features/Pages/Lead-page/Lead-tabs/lead-tabs.component/lead-tabs.component';
import { LeadTableComponent } from './features/Pages/Lead-page/lead-table/lead-table.component/lead-table.component';
// import { LeadTableComponent } from "./features/Pages/Lead-page/lead-table/lead-table.component/lead-table.component";
// import { LeadTabsComponent } from './features/Pages/Lead-page/Lead-tabs/lead-tabs.component/lead-tabs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLeadsComponent, LeadTabsComponent, LeadTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crm-demo');
}
