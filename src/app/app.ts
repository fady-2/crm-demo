import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeadDetails } from './features/lead/component/lead-details/lead-details';
import { Lead } from './features/lead/component/lead-details/lead.model';
import { LeadTableComponent } from './features/lead/component/lead-table/lead-table.component/lead-table.component';
import { Leads } from './features/lead/leads';
import { OwnerPageComponent } from './features/owner-page/owner-page.component';
import { CreateLead } from './features/lead/component/create-lead/create-lead';
import { CreateLeadCforms } from './features/lead/component/create-lead/components/create-lead-cforms/create-lead-cforms';
import { ItemService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('crm-demo');

  private dataService = inject(ItemService);

  constructor() {
    this.dataService.getAll().subscribe(
      (res: any) => {
        console.log('res', res);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }
}
