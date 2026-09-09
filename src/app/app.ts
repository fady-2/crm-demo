  import { Component, signal } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { LeadDetails } from "./features/lead/component/lead-details/lead-details";
  import { Lead } from './features/lead/component/lead-details/lead.model';
  import { LeadTableComponent } from "./features/lead/component/lead-table/lead-table.component/lead-table.component";
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LeadDetails, LeadTableComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
  })
  export class App {
    protected readonly title = signal('crm-demo');
 





selectedLead: Lead = {  id: 1,
  name: 'Moaz Elramsisy',
  email: 'moaz@engazcrm.com',
  mobile1: '+(20) 10 163 24799',
  mobiles: ['+(20) 10 163 24799', '+(20) 10 163 24799'],
  communicateWay: 'Phone',
  channel: 'Aqaar Map',
  status: 'Follow Up',
  creationDate: '7/5/23, 3:37 PM',
  lastUpdate: '40 day(s) ago',
  salesRep: 'Abdo Mahmoud',
  salesRepEmail: 'abdo@engazcrm.com',
  avatarUrl: '',
  projectName: 'Anakaji',
  fillCount: 854,
  hugCount: 390,
  projects: [{
    name: 'Anakaji', channel: 'Facebook', salesman: 'Moaz Elr...',
    salesmanAvatar: '', createdBy: 'Moaz Elr...', createdByAvatar: '',
    creationDate: '2022-10-19 12:57:40', status: 'Done Deal'
  }]
};
   
}



