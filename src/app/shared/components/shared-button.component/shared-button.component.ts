import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss',
})
export class SharedButtonComponent {
  buttonText = input<string>('');
  buttonIcon = input<string>('');
  buttonClass = input<string>('');
}
