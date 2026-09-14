import { Component, EventEmitter, Output } from '@angular/core';

import { CreateLeadHeader } from './components/create-lead-header/create-lead-header';
import { CreateLeadCforms } from './components/create-lead-cforms/create-lead-cforms';
import { FooterComponent } from '../../../owner-page/components/footer/footer.component';
 // import { FooterComponent } from '../../../owner-page/components/footer/footer.component';

@Component({
  selector: 'app-create-lead',
  imports: [
    CreateLeadHeader,
    CreateLeadCforms,
],
  templateUrl: './create-lead.html',
  styleUrl: './create-lead.scss',
})
export class CreateLead {

  
}