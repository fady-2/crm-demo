import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-create-lead-cforms',
  imports: [ReactiveFormsModule],
  templateUrl: './create-lead-cforms.html',
  styleUrl: './create-lead-cforms.scss',
})
export class CreateLeadCforms {

  @Output() closed = new EventEmitter<void>();

  ownerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.ownerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', Validators.required],
    project: ['', Validators.required],
    bua: ['', Validators.required],
    phase: ['', Validators.required],
    code: ['', Validators.required],
    category: ['', Validators.required],
    propertyType: ['', Validators.required],
    notes: ['', Validators.required]
  });
}

  close() {
    this.closed.emit();
  }

  saveOwner() {

  if (this.ownerForm.invalid) {
    this.ownerForm.markAllAsTouched();
    return;
  }

  console.log(this.ownerForm.value);

  // Clear form
  this.ownerForm.reset();
}

 
}