import { Component, input, output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialog {
  visible = input.required<boolean>();
  title = input<string>('Confirm');
  message = input<string>('Are you sure?');

  visibleChange = output<boolean>();
  confirmed = output<void>();

  onConfirm(): void {
    this.confirmed.emit();
    this.visibleChange.emit(false);
  }

  onCancel(): void {
    this.visibleChange.emit(false);
  }
}