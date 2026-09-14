import { Component, effect, inject, input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SharedButtonComponent } from '../../../../shared/components/shared-button.component/shared-button.component';
import { OwnerService } from '../../services/owner-service';
import { OwnerForm } from '../../models/owner.model';
@Component({
  selector: 'app-create-owner',
  imports: [ReactiveFormsModule, SharedButtonComponent],
  templateUrl: './create-owner.html',
  styleUrl: './create-owner.scss',
})
export class CreateOwner {
  private fb = inject(FormBuilder);
  private srv = inject(OwnerService);
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
    phone: [''],
    projectId: [null],
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
  onSaveOwner() {
    if (this.createOwner.valid) {
      this.srv.createOwner(this.createOwner.value).subscribe(
        (res) => {
          this.srv.loadOwners();
          console.log('Owner created successfully:', res);
        },
        (err) => {
          console.error('Error creating owner:', err);
        }
      );
      this.createOwner.reset();
    }
  }
  onUpdate() {
    if (this.createOwner.valid) {
      const ownerId = this.ownerData()?.id;
      if (ownerId) {
        this.srv.updateOwner(ownerId, this.createOwner.value).subscribe(
          (res) => {
            this.srv.loadOwners();
            console.log('Owner updated successfully:', res);
          },
          (err) => {
            console.error('Error updating owner:', err);
          }
        );
      }
    }
  }
  onCancel() {
    this.createOwner.reset();
  }
}
