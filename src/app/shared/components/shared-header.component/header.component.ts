import { Component, input , output} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { HeaderAction } from './header-action.model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerName = input.required<string>();
  headerDescription = input.required<string>();
  headerActions = input<HeaderAction[]>();
  actionClicked = output<HeaderAction>();
}
