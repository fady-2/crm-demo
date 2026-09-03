// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lead-table.component',
//   imports: [],
//   templateUrl: './lead-table.component.html',
//   styleUrl: './lead-table.component.scss',
// })
// export class LeadTableComponent {

// }








import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  date: Date;
  balance: number;
  status: string;
  activity: number;
}

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
    ProgressBarModule
  ],

  templateUrl: './lead-table.component.html',
  styleUrl: './lead-table.component.scss'
})
export class LeadTableComponent implements OnInit {

  leads: Lead[] = [];

  selectedLeads: Lead[] = [];

  representatives: {
    name: string;
    image: string;
  }[] = [];

  statuses: {
    label: string;
    value: string;
  }[] = [];

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
        status: 'qualified',
        activity: 80
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
        status: 'new',
        activity: 40
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
        status: 'negotiation',
        activity: 65
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
        status: 'proposal',
        activity: 90
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
        label: 'Unqualified',
        value: 'unqualified'
      },
      {
        label: 'Qualified',
        value: 'qualified'
      },
      {
        label: 'New',
        value: 'new'
      },
      {
        label: 'Negotiation',
        value: 'negotiation'
      },
      {
        label: 'Renewal',
        value: 'renewal'
      },
      {
        label: 'Proposal',
        value: 'proposal'
      }
    ];

    this.loading = false;
  }

  getSeverity(status: string) {

    switch (status) {

      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warn';

      case 'renewal':
        return 'secondary';

      case 'proposal':
        return 'contrast';

      default:
        return 'info';
    }
  }

  clear(table: any): void {
    table.clear();

    this.searchValue = '';
  }
}

