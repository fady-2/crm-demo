import { Component, inject, input } from '@angular/core';
import { Owner } from '../owner-page/models/owner.model';
import { SharedButtonComponent } from "../../shared/components/shared-button.component/shared-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-details',
  imports: [SharedButtonComponent],
  templateUrl: './owner-details.html',
  styleUrl: './owner-details.scss',
})
export class OwnerDetails {
  router = inject(Router);
  owner = input.required<Owner>();
  buttons = [
    'Owner Info',
    'Comments',
    'Time Line Log',
    'Owner Seller Request',
  ]
  navigateToOwners(){
    this.router.navigate(['/owners']);
  }
}
