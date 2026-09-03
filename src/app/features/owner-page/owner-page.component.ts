import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component/header.component';
import { TableComponent } from "./components/table.component/table.component";
import { PaginatorComponent } from './components/paginator.component/paginator.component';
import { FilterationComponent } from "./components/filteration.component/filteration.component";
import { TapsComponent } from "./components/taps.component/taps.component";

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [HeaderComponent, TableComponent, PaginatorComponent, FilterationComponent, TapsComponent],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent {
}
