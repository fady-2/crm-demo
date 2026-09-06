import { Component, input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TableColumn } from './column.model';

@Component({
  selector: 'app-shared-table',
  imports: [CommonModule, TableModule, TagModule],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss',
})
export class SharedTableComponent <T> {
  columns = input.required<TableColumn<T>[]>();
  data = input.required<T[]>();
  loading = input<boolean>(false);
  actionsTemplate = input<TemplateRef<any>>();
}
