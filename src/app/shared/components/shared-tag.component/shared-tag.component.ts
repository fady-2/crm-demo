import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-tag',
  imports: [],
  templateUrl: './shared-tag.component.html',
  styleUrl: './shared-tag.component.scss',
})
export class SharedTagComponent {
  tagText = input.required<string | undefined>();
  tagStatus = input<'info' | 'warning' | 'danger' | 'neutral' | 'success'>('info');
}
