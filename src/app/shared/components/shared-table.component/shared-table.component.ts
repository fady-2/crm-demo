import { Component, input, output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TableColumn } from './column.model';
import { SharedButtonComponent } from '../shared-button.component/shared-button.component';

@Component({
  selector: 'app-shared-table',
  imports: [CommonModule, TableModule, TagModule, SharedButtonComponent],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss',
})
export class SharedTableComponent <T> {
  columns = input.required<TableColumn<T>[]>();
  data = input.required<T[]>();
  loading = input<boolean>(false);
  rowSelected = output<any>();
  deleteRow = output<any>();
  editRow = output<any>();
  imgSrc = "https://ui-avatars.com/api/?name=Moaz+Elramsisy"
}
