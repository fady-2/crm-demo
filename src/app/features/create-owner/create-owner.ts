import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SharedButtonComponent } from '../../shared/components/shared-button.component/shared-button.component';
@Component({
  selector: 'app-create-owner',
  imports: [ReactiveFormsModule, SharedButtonComponent],
  templateUrl: './create-owner.html',
  styleUrl: './create-owner.scss',
})
export class CreateOwner {
  private fb = inject(FormBuilder);
  projects = [
    {
      value: 'project 1',
      name: 'Project one',
    },
    {
      value: 'project 2',
      name: 'Project two',
    },
    {
      value: 'project 3',
      name: 'Project three',
    },
  ];
  categories = [
    {
      value: 'category 1',
      name: 'category one',
    },
    {
      value: 'category 2',
      name: 'category two',
    },
    {
      value: 'category 3',
      name: 'category three',
    },
  ];
  propertyTypes = [
    {
      value: 'property 1',
      name: 'property one',
    },
    {
      value: 'property 2',
      name: 'property two',
    },
    {
      value: 'property 3',
      name: 'property three',
    },
  ];
  createOwner = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    project: [null, [Validators.required]],
    bua: [''],
    phase: [''],
    code: [''],
    category: [null],
    propertyType: [null],
    notes: [''],
  });
  onSaveOwner() {
    if (this.createOwner.valid) {
      console.log(this.createOwner.value);
      this.createOwner.reset();
    }
  }
  onCancel() {
    this.createOwner.reset();
  }
}
