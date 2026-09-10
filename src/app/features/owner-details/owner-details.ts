import { Component, inject, input } from '@angular/core';
import { Owner } from '../owner-page/models/owner.model';
import { SharedButtonComponent } from "../../shared/components/shared-button.component/shared-button.component";
import { Router } from '@angular/router';
import { SharedTagComponent } from "../../shared/components/shared-tag.component/shared-tag.component";

@Component({
  selector: 'app-owner-details',
  imports: [SharedButtonComponent, SharedTagComponent],
  templateUrl: './owner-details.html',
  styleUrl: './owner-details.scss',
})
export class OwnerDetails {
  router = inject(Router);
  owner = input.required<Owner>();

  actionButtons = [
    { text: 'Add Action', class: 'primary', icon: 'bi bi-plus-lg' },
    { text: '',class: 'basic', icon: 'bi bi-pencil' },
    { text: '',class: 'basic', icon: 'bi bi-send' },
    { text: '',class: 'basic', icon: 'bi bi-arrow-left-right' },
    { text: '',class: 'basic outline', icon: 'bi bi-trash text-danger' },
  ];
  tabsButtons = [
    'Owner Info',
    'Comments',
    'Time Line Log',
    'Owner Seller Request',
  ]
  navigateToOwners() {
    this.router.navigate(['/owners']);
  }
}
