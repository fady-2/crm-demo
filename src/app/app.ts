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
    this.create()
  }

  getAll() {
    this.dataService.getAll().subscribe(
      (res: any) => {
        console.log('res', res);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }

  create() {
    this.dataService
      .create({
        name: 'Fady',
        email: 'fady@gmail.com',
        phone: '01000000010',
        projectId: 1,
        bua: 'a100',
        phase: 'a10',
        code: '100',
        category: 2,
        propertyType: 2,
        notes: 'notes',
      })
      .subscribe(
        (res: any) => {
          console.log('res', res);
          this.getAll()
        },
        (err: any) => {
          console.log('err', err);
        },
      );
  }


  




  
}
