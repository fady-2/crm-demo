import { Component, signal } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MetaConversionLog } from './models/meta-log.model';
import { TableColumn } from '../../shared/components/shared-table.component/column.model';
import { MetaLogDetails } from './components/meta-log-details/meta-log-details';
import { MetaLogFilter } from './components/meta-log-filter/meta-log-filter';

@Component({
  selector: 'app-meta-conversions-log',
  standalone: true,
  imports: [TableModule, MetaLogDetails , MetaLogFilter, NgClass , DatePipe],
  templateUrl: './meta-conversions-log.html',
  styleUrl: './meta-conversions-log.scss',
})
export class MetaConversionsLog {
  rowSelected = signal<MetaConversionLog | null>(null);
  isVisibleFilterLog = signal<boolean>(false);

  changeRowSelected(rowData: MetaConversionLog) {
    this.rowSelected.set(rowData);
  }

  getStatusClass(status: MetaConversionLog['status']): string {
    switch (status) {
      case 'Sent':
        return 'status-sent';
      case 'Pending':
        return 'status-pending';
      case 'Failed':
        return 'status-failed';
    }
  }

  columns: TableColumn<MetaConversionLog>[] = [
    { key: 'lead', label: 'Lead' },
    { key: 'journeyStage', label: 'Engaz Journey Stage' },
    { key: 'metaEvent', label: 'Meta Event' },
    { key: 'eventDate', label: 'Event Date' },
    { key: 'status', label: 'Status' },
    { key: 'failureReason', label: 'Failure Reason' },
  ];
  // data: MetaConversionLog[] = []
  data: MetaConversionLog[] = [
    {
      leadId: 'LD-8188',
      lead: 'Ahmed',
      journeyStage: 'Follow Up',
      metaEvent: 'Follow Up',
      eventDate: new Date(2025, 8, 12, 2, 20),
      status: 'Sent',
      failureReason: null,
      eventRef: 'EVT-102035',
    },
    {
      leadId: 'LD-8188',
      lead: 'Ahmed',
      journeyStage: 'Meeting Action',
      metaEvent: 'Meeting Scheduled',
      eventDate: new Date(2025, 8, 12, 2, 20),
      status: 'Pending',
      failureReason: null,
      eventRef: 'EVT-102036',
    },
    {
      leadId: 'LD-9012',
      lead: 'Sara',
      journeyStage: 'Done Deal',
      metaEvent: 'Deal Won',
      eventDate: new Date(2025, 8, 12, 2, 20),
      status: 'Failed',
      failureReason: 'Integration disconnected before delivery.',
      eventRef: 'EVT-102037',
    },
  ];

  toggleFilterLogVisability() {
    this.isVisibleFilterLog.update((prev) => !prev);
  }
}
