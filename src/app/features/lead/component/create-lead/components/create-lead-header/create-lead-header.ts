import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-lead-header',
  imports: [],
  templateUrl: './create-lead-header.html',
  styleUrl: './create-lead-header.scss',
})
export class CreateLeadHeader {
  @Output() closed = new EventEmitter<void>();


   close() {
      this.closed.emit();

    console.log('Close owner form');
  }
}
