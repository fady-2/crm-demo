import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header.component/header.component';

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [ButtonModule , HeaderComponent],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent {

}
