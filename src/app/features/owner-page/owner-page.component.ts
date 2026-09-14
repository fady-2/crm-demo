import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/shared-header.component/header.component';
import { FilterationComponent } from "./components/filteration.component/filteration.component";
import { TapsComponent } from "../../shared/UI/taps.component/taps.component";
import { OwnerForm } from './models/owner.model';
import { TableColumn } from '../../shared/components/shared-table.component/column.model';
import { SharedTableComponent } from "../../shared/components/shared-table.component/shared-table.component";
import { OwnerDetails } from "./components/owner-details/owner-details";
import { CreateOwner } from './components/create-owner/create-owner';
import { SharedButtonComponent } from '../../shared/components/shared-button.component/shared-button.component';
import { OwnerService } from './services/owner-service';

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [HeaderComponent, FilterationComponent, TapsComponent, SharedTableComponent, OwnerDetails, CreateOwner, SharedButtonComponent],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent implements OnInit {
  title = 'Owners';
  description = 'Manage your owners and their information';
  srv = inject(OwnerService);
  //##################################################
  columns: TableColumn<OwnerForm>[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone Number' },
    { key: 'projectId', label: 'Project ID' },
    { key: 'bua', label: 'BUA' },
    { key: 'phase', label: 'Phase' },
    { key: 'code', label: 'Code' },
    { key: 'category', label: 'Category' },
    { key: 'propertyType', label: 'Property Type' },
  ]
  //##################################################

  ngOnInit() {
    this.srv.loadOwners();
  }

  selectedOwner: any | null = null;
  onRowSelected(owner: OwnerForm) {
    this.selectedOwner = owner;
  }
  onDeleteRow(owner: OwnerForm) {
    this.srv.deleteOwner(owner.id!).subscribe({
      next: () => {
        this.srv.loadOwners();
      },
      error: (err) => {
        console.error('Error deleting owner:', err);
      }
    });
  }
  onEditRow(owner: OwnerForm) {
    this.selectedOwner = owner;
  }
  onClose(){
    this.selectedOwner = null;
  }
}
