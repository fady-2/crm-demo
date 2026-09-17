import { Component, signal } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MetaConversionLog } from './models/meta-log.model';
import { MetaLogDetails } from './components/meta-log-details/meta-log-details';
import { MetaLogFilter } from './components/meta-log-filter/meta-log-filter';

@Component({
  selector: 'app-meta-conversions-log',
  standalone: true,
  imports: [TableModule, MetaLogDetails, MetaLogFilter, NgClass, DatePipe],
  templateUrl: './meta-conversions-log.html',
  styleUrl: './meta-conversions-log.scss',
})
export class MetaConversionsLog {
  rowSelected = signal<MetaConversionLog | null>(null);
  isVisibleFilterLog = signal<boolean>(false);

  changeRowSelected(rowData: MetaConversionLog) {
    this.rowSelected.set(rowData);
  }

  getStatusClass(status: MetaConversionLog['lead']['status']): string {
    switch (status) {
      case 'Sent':
        return 'status-sent';
      case 'Pending':
        return 'status-pending';
      case 'Failed':
        return 'status-failed';
    }
  }
  // data: MetaConversionLog[] = []
  data: MetaConversionLog[] = [
    {
      journeyStage: 'Follow Up',
      metaEvent: 'Follow Up',
      eventDate: new Date(2025, 8, 12, 2, 20),
      failureReason: null,
      eventRef: 'EVT-102035',
      lead: {
        leadId: 'LD-8188',
        leadName: 'Ahmed',
        status: 'Pending',
      }
    },
    {
      lead: {
        leadId: 'LD-8189',
        leadName: 'Ahmed',
        status: 'Sent',

      },
      journeyStage: 'Meeting Action',
      metaEvent: 'Meeting Scheduled',
      eventDate: new Date(2025, 8, 12, 2, 20),
      failureReason: null,
      eventRef: 'EVT-102036',
    },
    {
      lead: {
        leadId: 'LD-8180',
        leadName: 'Sara',
        status: 'Failed',

      },
      journeyStage: 'Done Deal',
      metaEvent: 'Deal Won',
      eventDate: new Date(2025, 8, 12, 2, 20),
      failureReason: 'Integration disconnected before delivery.',
      eventRef: 'EVT-102037',
    },
  ];

  toggleFilterLogVisability() {
    this.isVisibleFilterLog.update((prev) => !prev);
  }
}
