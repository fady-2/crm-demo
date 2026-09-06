import { Component, signal } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

interface StateOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-search',
  imports: [FormsModule , InputIconModule, IconFieldModule, InputTextModule],
  templateUrl: './shared-search.component.html',
  styleUrl: './shared-search.component.scss',
})
export class SharedSearchComponent {
  options : StateOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Ferch', value: 'ferch' },
    { label: 'Deal', value: 'deal' },
    { label: 'Sale', value: 'sale' },
    { label: 'Rent', value: 'rent' },
    { label: 'Trash', value: 'trash' },
  ]
  selectedOption = signal('all');
}
