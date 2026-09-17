import { Component, inject, Input } from '@angular/core';
import { CreateLeadCforms } from '../../create-lead/components/create-lead-cforms/create-lead-cforms';
import { CreateLeadHeader } from '../../create-lead/components/create-lead-header/create-lead-header';
import { LeadModel } from '../../../../../core/models/lead.model';
import { LeadService } from '../../../../../core/services/lead.service';

@Component({
  selector: 'app-header-leads',
  imports: [CreateLeadCforms, CreateLeadHeader],
  templateUrl: './header-leads.component.html',
  styleUrl: './header-leads.component.scss',
})
export class HeaderLeadsComponent {

openCreateLead() {
  this.leadToEdit = null;      
  this.isCreateLeadOpen = true;
}

openEditLead(lead: LeadModel) {
  this.leadToEdit = lead;       
  this.isCreateLeadOpen = true;
}
 
 private leadService = inject(LeadService);

   leadToEdit: LeadModel | null = null;

  ngOnInit(): void {
    this.leadService.editLeadRequested$.subscribe(lead => {
      this.leadToEdit = lead;
      this.isCreateLeadOpen = true;
    });
  }

  

  isCreateLeadOpen = false;



closeCreateLead() {
  this.isCreateLeadOpen = false;
      this.leadToEdit = null;

}
}
