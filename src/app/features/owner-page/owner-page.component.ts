import { Component } from '@angular/core';
import { HeaderComponent } from './header.component/header.component';
import { FooterComponent } from "./footer/footer.component";
import { TableComponent } from "./table.component/table.component";

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TableComponent],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent {
}
