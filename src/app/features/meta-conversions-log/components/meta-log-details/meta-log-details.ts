import { Component, computed, input } from '@angular/core';
import { MetaConversionLog } from '../../models/meta-log.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-meta-log-details',
  standalone: true,
  imports: [NgClass , DatePipe],
  templateUrl: './meta-log-details.html',
  styleUrl: './meta-log-details.scss',
})
export class MetaLogDetails {
  row = input.required<MetaConversionLog | null>();

  statusClass = computed(() => {
    switch (this.row()?.status) {
      case 'Sent':
        return 'status-sent';
      case 'Pending':
        return 'status-pending';
      case 'Failed':
        return 'status-failed';
      default:
        return '';
    }
  });
}
