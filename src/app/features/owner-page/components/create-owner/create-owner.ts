import { Component, effect, inject, input, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SharedButtonComponent } from '../../../../shared/components/shared-button.component/shared-button.component';
import { OwnerService } from '../../services/owner-service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-owner',
  imports: [ReactiveFormsModule, SharedButtonComponent, ToastModule],
  templateUrl: './create-owner.html',
  styleUrl: './create-owner.scss',
  providers: [MessageService]
})
export class CreateOwner implements OnDestroy {
  private fb = inject(FormBuilder);
  private srv = inject(OwnerService);
  private messageService = inject(MessageService);
  private createSub?: Subscription;
  private updateSub?: Subscription;
  ownerData = input<any | null>(null);

  projects = [
    {
      value: 1,
      name: 'Project one',
    },
    {
      value: 2,
      name: 'Project two',
    },
    {
      value: 3,
      name: 'Project three',
    },
  ];
  categories = [
    {
      value: 1,
      name: 'category one',
    },
    {
      value: 2,
      name: 'category two',
    },
    {
      value: 3,
      name: 'category three',
    },
  ];
  propertyTypes = [
    {
      value: 1,
      name: 'property one',
    },
    {
      value: 2,
      name: 'property two',
    },
    {
      value: 3,
      name: 'property three',
    },
  ];
  createOwner = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    projectId: [null , [Validators.required]],
    bua: [''],
    phase: [''],
    code: [''],
    category: [null],
    propertyType: [null],
    notes: [''],
  });

  constructor() {
    effect(() => {
      const owner = this.ownerData();
      if (owner) {
        this.createOwner.patchValue(owner);
      } else {
        this.createOwner.reset();
      }
    });
  }
  ngOnDestroy() {
    this.createSub?.unsubscribe();
    this.updateSub?.unsubscribe();
  }
  onSaveOwner() {
    if (this.createOwner.valid) {
      this.createSub = this.srv.createOwner(this.createOwner.value).subscribe(
        (res) => {
          this.srv.loadOwners();
          this.messageService.add({ severity: 'success', summary: 'Created successfully', detail: 'Your owner has been created.' });
        },
        (err) => {
          console.error('Error creating owner:', err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while creating the owner.' });
        }
      );
      this.createOwner.reset();
    }else{
      this.createOwner.markAllAsTouched();
    }
  }
  onUpdate() {
    if (this.createOwner.valid) {
      const ownerId = this.ownerData()?.id;
      if (ownerId) {
        this.updateSub = this.srv.updateOwner(ownerId, this.createOwner.value).subscribe(
          (res) => {
            this.srv.loadOwners();
            this.messageService.add({ severity: 'success', summary: 'Updated successfully', detail: 'Your owner has been updated.' });
          },
          (err) => {
            console.error('Error updating owner:', err);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred while updating the owner.' });
          }
        );
      }
    }else{
      this.createOwner.markAllAsTouched();
    }
  }
  onCancel() {
    this.createOwner.reset();
  }
}
