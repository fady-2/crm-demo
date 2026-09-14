import { Component } from '@angular/core';
import { CreateLeadCforms } from '../../create-lead/components/create-lead-cforms/create-lead-cforms';
import { CreateLeadHeader } from '../../create-lead/components/create-lead-header/create-lead-header';
// import { CreateLeadFooter } from '../../create-lead/components/create-lead-footer/create-lead-footer';
// import { CreateLead } from '../../create-lead/create-lead/create-lead';

@Component({
  selector: 'app-header-leads',
  imports: [CreateLeadCforms, CreateLeadHeader],
  templateUrl: './header-leads.component.html',
  styleUrl: './header-leads.component.scss',
})
export class HeaderLeadsComponent {

  isCreateLeadOpen = false;

openCreateLead() {
  this.isCreateLeadOpen = true;
}

closeCreateLead() {
  this.isCreateLeadOpen = false;
}
}
