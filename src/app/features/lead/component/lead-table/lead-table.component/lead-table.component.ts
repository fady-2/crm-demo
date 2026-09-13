import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
// import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { LeadDetails } from "../../lead-details/lead-details";
import { Lead as LeadDetailsModel } from "../../lead-details/lead.model";

interface Lead {
  id: number;
  LeadName: string;
  country: {
    name: string;
    code: string;
  };
  company: string;
  representative: {
    name: string;
    image: string;
  };
  balance: number;
  status: string;
  // activity: number;
  text:string;
  date:Date;
};


@Component({
  selector: 'app-lead-table',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    TableModule,
    TagModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    InputTextModule,
    // DropdownModule,
    SliderModule,
    ProgressBarModule,
    LeadDetails
],

  templateUrl: './lead-table.component.html',
  styleUrl: './lead-table.component.scss'
})
export class LeadTableComponent implements OnInit {

@Input() detailsLead!: LeadDetailsModel;
  leads: Lead[] = [];

  selectedLeads: Lead[] = [];
selectedLead!: LeadDetailsModel;






  @Output() leadSelected = new EventEmitter<Lead>();

  selectLead(lead: Lead) {
    this.leadSelected.emit(lead); // هنا فعليًا بتاخد الـ object وتبعته لبره
  }










  representatives: {
    name: string;
    image: string;
  }[] = [];

  statuses: {
    label: string;
    value: string;
  }[] = [];



columns = [
  {
    field: 'name',
    header: 'Lead Name',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'country.name',
    header: 'Mobile',
    sortable: true,
    filter: false,
    filterType: 'text'
  },
  {
    field: 'representative.name',
    header: 'Email Address',
    sortable: true,
    // filter: true,
    filterType: 'multiSelect'
  },
  {
    field: 'date',
    header: 'Project',
    sortable: true,
    // filter: true,
    filterType: 'date'
  },
  {
    field: 'balance',
    header: 'Assigned To',
   
    filterType: 'numeric'
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    // filter: true,
    filterType: 'select'
  },
  {
    field: 'text',
    header: 'Last Comment',
    
  },
  {
    field: 'text',
    header: 'Creation Date',
    
  },
];






  loading = true;

  activityValues: number[] = [0, 100];

  searchValue = '';

  ngOnInit(): void {

    this.leads = [
      {
        id: 1,
        LeadName: 'Ahmed Ali',
        country: {
          name: 'Egypt',
          code: 'eg'
        },
        company: 'ABC Company',
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        date: new Date('2026-08-20'),
        balance: 25000,
        status: 'Waiting',
         text: 'he is not interested'
      },

      {
        id: 2,
        LeadName: 'Mohamed Hassan',
        country: {
          name: 'Egypt',
          code: 'eg'
        },
        company: 'XYZ Company',
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        date: new Date('2026-08-22'),
        balance: 12000,
        status: 'status-follow-up',
                text: 'he is not interested'

      },

      {
        id: 3,
        LeadName: 'Omar Khaled',
        country: {
          name: 'Egypt',
          code: 'eg'
        },
        company: 'Tech Company',
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        date: new Date('2026-08-25'),
        balance: 18000,
        status: 'canacel',
         text: 'he is not interested'

      },

      {
        id: 4,
        LeadName: 'John Smith',
        country: {
          name: 'USA',
          code: 'us'
        },
        company: 'Global Inc',
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        date: new Date('2026-08-28'),
        balance: 32000,
        status: 'meeting',
        text: 'he is not interested'

      }
    ];

    this.representatives = [
      {
        name: 'Amy Elsner',
        image: 'amyelsner.png'
      },
      {
        name: 'Anna Fali',
        image: 'annafali.png'
      },
      {
        name: 'Asiya Javayant',
        image: 'asiyajavayant.png'
      },
      {
        name: 'Bernardo Dominic',
        image: 'bernardodominic.png'
      }
    ];

    this.statuses = [
      {
        label: 'Follow',
        value: 'Follow'
      },
      {
        label: 'canceled',
        value: 'canceled'
      },
      {
        label: 'new',
        value: 'new'
      },
      {
        label: 'Done',
        value: 'Done'
      },
      {
        label: 'new',
        value: 'new'
      },
      {
        label: 'meet',
        value: 'meet'
      }
    ];

    this.loading = false;
  }

  getSeverity(status: string) {

    switch (status) {

      case 'Waiting':
        return 'status-Waiting';

     
      case 'status-follow-up':
        return 'follow-up';

      case 'Done':
        return 'status-Done';

      case 'canacel':
        return 'status-canaceled';

        case 'meeting':
        return 'status-meeting';

   

      default:
        return 'status-defualt';
    }
  }
 

  clear(table: any): void {
    table.clear();

    this.searchValue = '';
  }




 getStatusDotClass(status: string): string {
  switch (status) {
    case 'Follow Up':
      return 'dot-danger';

    case 'qualified':
      return 'dot-success';

    case 'new':
      return 'dot-info';

    case 'negotiation':
      return 'dot-warning';

    case 'renewal':
      return 'dot-secondary';

    case 'proposal':
      return 'dot-contrast';

    default:
      return '';
  }
}



showLeadDetails = false;

// openLeadDetails(): void {
//   this.showLeadDetails = true;
// }











openLeadDetails(lead: Lead): void {
  this.selectedLead = {
    id: lead.id,
    name: lead.LeadName,
    email: 'hos@gmail.com',
    mobile1: '01007012871',
    mobiles: ['01007012871'],
    communicateWay: 'Phone',
    channel: lead.company,
    status: lead.status,
    creationDate: lead.date.toLocaleDateString(),
    lastUpdate: '40 day(s) ago',
    salesRep: lead.representative.name,
    salesRepEmail: 'sales@engazcrm.com',
    avatarUrl: lead.representative.image,
    projectName: lead.company,
    fillCount: lead.balance,
    hugCount: 390,
 projects: [
  {
    name: lead.company,
    channel: lead.company,
    salesman: lead.representative.name,
    salesmanAvatar: lead.representative.image,
    createdBy: 'Admin',
    createdByAvatar: 'icons/arrow.png',
    creationDate: lead.date.toLocaleDateString(),
    status: lead.status
  }
]
}



}}


