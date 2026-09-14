 import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { LeadService } from '../../../../../../core/services/lead.service';
import { LeadModel } from '../../../../../../core/models/lead.model';

@Component({
  selector: 'app-create-lead-cforms',
  imports: [ReactiveFormsModule],
  templateUrl: './create-lead-cforms.html',
  styleUrl: './create-lead-cforms.scss',
})
export class CreateLeadCforms implements OnChanges {

  @Input() leadToEdit: LeadModel | null = null;
  @Output() closed = new EventEmitter<void>();

  leadForm: FormGroup;

  private leadService = inject(LeadService);

  constructor(private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      projectId: [null, Validators.required],
      bua: [''],
      phase: [''],
      code: [''],
      category: [''],
      propertyType: [''],
      notes: ['']
    });
  }

  ngOnChanges(): void {
    if (this.leadToEdit) {
      this.leadForm.patchValue(this.leadToEdit);
    } else {
      this.leadForm.reset();
    }
  }

  close() {
    this.closed.emit();
  }

  saveOwner() {
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    const formValue = this.leadForm.value;

    if (this.leadToEdit?.id) {
       this.leadService.update(this.leadToEdit.id, formValue).subscribe({
        next: (response) => {
          this.leadForm.reset();
          this.close();
        },
        error: (error) => {
          console.error('Error updating (backend not reachable):', error);
           this.leadService.updateLocalLead({
            ...this.leadToEdit!,
            ...formValue
          });
          this.leadForm.reset();
          this.close();
        }
      });
    } else {
       this.leadService.create(formValue).subscribe({
        next: (response) => {
          this.leadForm.reset();
          this.close();
        },
        error: (error) => {
          console.error('Error saving (backend not reachable):', error);
          this.leadService.addLocalLead({
            ...formValue,
            id: Date.now(),
            createdAt: new Date().toISOString()
          });
          this.leadForm.reset();
          this.close();
        }
      });
    }
  }
}