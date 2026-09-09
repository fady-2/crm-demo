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
  buttonStatus = input<'primary' | 'secondary' | 'link' | 'danger' | 'neutral' | 'success' | 'basic'>('primary');
  buttonOutline = input<boolean>(false);
  buttonBorder = input<boolean>(true);
}
