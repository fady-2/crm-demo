import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

export interface StateOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-taps',
  imports: [SelectButtonModule, FormsModule],
  templateUrl: './taps.component.html',
  styleUrl: './taps.component.scss',
})
export class TapsComponent {
  options = [
    { label: 'All Owners', value: 'all' },
    { label: 'Ferch', value: 'ferch' },
    { label: 'Deal', value: 'deal' },
    { label: 'Sale', value: 'sale' },
    { label: 'Rent', value: 'rent' },
    { label: 'Trash', value: 'trash' },
    {label : ":" , value : "others" }
  ];
  selectedOption = signal('all');
  valueChanged() {
    console.log(this.selectedOption());
  }
}
