import { Component, EventEmitter, Output } from '@angular/core';

import { CreateLeadHeader } from './components/create-lead-header/create-lead-header';
import { CreateLeadCforms } from './components/create-lead-cforms/create-lead-cforms';

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