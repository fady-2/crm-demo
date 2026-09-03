import { Component, input } from '@angular/core';
import {ButtonComponent} from '../button.component/button.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerName = input.required<string>();
  headerDescription = input.required<string>();
}
