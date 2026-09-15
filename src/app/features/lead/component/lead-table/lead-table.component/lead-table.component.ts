import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';import { CommonModule } from '@angular/common';
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
import {   Lead as LeadDetailsModel } from "../../lead-details/lead.model";
import { LeadModel } from '../../../../../core/models/lead.model';
import { LeadService } from '../../../../../core/services/lead.service';
  


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
    LeadDetails,
    
],

  templateUrl: './lead-table.component.html',
  styleUrl: './lead-table.component.scss'
})
export class LeadTableComponent implements OnInit {

    private leadService = inject(LeadService);

@Input() detailsLead!: LeadDetailsModel;
leads: LeadModel[] = [];
//   selectedLeads: Lead[] = [];
// selectedLead!: LeadDetailsModel;

selectedLeads: LeadModel[] = [];

selectedLead!: LeadDetailsModel;

@Output() leadSelected = new EventEmitter<LeadModel>();

  
  selectLead(lead: LeadModel) {
    this.leadSelected.emit(lead);  
  }

editLead(lead: LeadModel) {
  this.leadService.requestEditLead(lead);
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
    field: 'phone',
    header: 'Mobile',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'email',
    header: 'Email Address',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'projectId',
    header: 'Project',
    sortable: true,
    filter: true,
    filterType: 'numeric'
  },
  {
    field: 'bua',
    header: 'BUA',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'phase',
    header: 'Phase',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'code',
    header: 'Code',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'category',
    header: 'Category',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'propertyType',
    header: 'Property Type',
    sortable: true,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'notes',
    header: 'Notes',
    sortable: false,
    filter: true,
    filterType: 'text'
  },
  {
    field: 'createdAt',
    header: 'Creation Date',
    sortable: true,
    filter: true,
    filterType: 'date'
  }
];






  loading = true;

  activityValues: number[] = [0, 100];

  searchValue = '';

  ngOnInit(): void {

      this.loadLeads();
this.leadService.leadCreated$.subscribe(newLead => {
    this.leads = [newLead, ...this.leads];  
  });

  this.leadService.leadUpdated$.subscribe(updatedLead => {
    this.leads = this.leads.map(l =>
      l.id === updatedLead.id ? updatedLead : l
    );
  });

   }


  loadLeads() {

  this.loading = true;

  this.leadService.getAll().subscribe({

    next: (data) => {

      this.leads = data;

      this.loading = false;

      console.log('Leads:', this.leads);
    },

    error: (error) => {

      console.error('Error loading leads:', error);

      this.loading = false;
    }

  });
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

 openLeadDetails(lead: LeadModel): void {
  this.selectedLead = {
    id: lead.id??0,
    name: lead.name,
    email: lead.email,
    mobile1: lead.phone,
    mobiles: [lead.phone],

    communicateWay: 'Phone',
    channel: '',
    status: '',

    creationDate: lead.createdAt ?? '',
    lastUpdate: '',

    salesRep: '',
    salesRepEmail: '',
    avatarUrl: '',

    projectName: String(lead.projectId),

    fillCount: 0,
    hugCount: 0,

    projects: []
  };
}




// deleted(id:number){
// this.leadService.deleteLead(id).subscribe(()=>{
//   this.leads=this.leads.filter( lead=>lead.id !==id)
// });
// }
 

deleted(id: number) {
  this.leadService.deleteLead(id).subscribe({
    next: () => {
      this.leads = this.leads.filter(lead => lead.id !== id);
    },
    error: (error) => {
      console.error('Error deleting (backend not reachable):', error);
      this.leads = this.leads.filter(lead => lead.id !== id);
    }
  });
}










}


