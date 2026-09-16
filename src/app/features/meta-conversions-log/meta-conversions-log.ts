import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableColumn } from '../../shared/components/shared-table.component/column.model';
import { MetaConversionLog } from './models/meta-log.model';

@Component({
  selector: 'app-meta-conversions-log',
  imports: [TableModule],
  templateUrl: './meta-conversions-log.html',
  styleUrl: './meta-conversions-log.scss',
})
export class MetaConversionsLog {
  columns: TableColumn<MetaConversionLog>[] = [
      { key: 'lead', label: 'Lead' },
      { key: 'journeyStage', label: 'Journey Stage' },
      { key: 'metaEvent', label: 'Meta Event' },
      { key: 'eventDate', label: 'Event Date' },
      { key: 'status', label: 'Status' },
      { key: 'failureReason', label: 'Failure Reason' },
    ]
  data: MetaConversionLog[] = [
    { lead: 'Ahmed', journeyStage: 'Follow Up', metaEvent: 'Follow Up', eventDate: new Date(2025, 8, 12, 2, 20), status: 'Sent', failureReason: null },
    { lead: 'Ahmed', journeyStage: 'Meeting Action', metaEvent: 'Meeting Scheduled', eventDate: new Date(2025, 8, 12, 2, 20), status: 'Pending', failureReason: null },
    { lead: 'Sara', journeyStage: 'Done Deal', metaEvent: 'Deal Won', eventDate: new Date(2025, 8, 12, 2, 20), status: 'Failed', failureReason: 'Integration disconnected before delivery.' },
  ]
}
