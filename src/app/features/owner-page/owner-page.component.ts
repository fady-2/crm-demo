import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
import { ConfirmDialog } from '../../shared/UI/confirm-dialog/confirm-dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [HeaderComponent, FilterationComponent, TapsComponent, SharedTableComponent, OwnerDetails, CreateOwner, SharedButtonComponent, ConfirmDialog],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent implements OnInit, OnDestroy {
  title = 'Owners';
  description = 'Manage your owners and their information';
  srv = inject(OwnerService);
  private deleteSub?: Subscription;
  // private destroyRef = inject(DestroyRef);
  showConfirmDialog = signal(false);
  ownerToDelete: OwnerForm | null = null;
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
  ngOnDestroy() {
    this.deleteSub?.unsubscribe();
  }
  selectedOwner: any | null = null;
  onRowSelected(owner: OwnerForm) {
    this.selectedOwner = owner;
  }
  onDeleteRow(owner: OwnerForm) {
    this.ownerToDelete = owner;
    this.showConfirmDialog.set(true);
  }
  onConfirmDelete() {
    if (this.ownerToDelete) {
      this.deleteSub = this.srv.deleteOwner(this.ownerToDelete.id!).subscribe({
        next: () => {
          this.srv.loadOwners();
          this.ownerToDelete = null;
          this.showConfirmDialog.set(false);
        },
        error: (err) => {
          this.ownerToDelete = null;
          this.showConfirmDialog.set(false);
          console.error('Error deleting owner:', err);
        }
      });
    }
  }
  onCancelDelete() {
    this.ownerToDelete = null;
    this.showConfirmDialog.set(false);
  }
  onEditRow(owner: OwnerForm) {
    this.selectedOwner = owner;
  }
  onClose() {
    this.selectedOwner = null;
  }
}
