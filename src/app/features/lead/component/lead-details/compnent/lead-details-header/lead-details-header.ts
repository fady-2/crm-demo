 
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedButtons } from '../../../../../../shared/components/shared-button/shared-buttons/shared-buttons';
import { Lead } from '../../lead.model';
 
@Component({
  selector: 'app-lead-header',
  standalone: true,
  imports: [CommonModule, SharedButtons],
  templateUrl: './lead-details-header.html',
  styleUrl: './lead-details-header.scss',
})
export class LeadHeader {
  @Input() lead!: Lead;
  @Input() showTitle = true;

  stars = [1, 2, 3, 4, 5];
  rating = 3;

  tabs = [
    'Lead Info',
    'Comments',
    'Timeline Log',
    'Attachments',
    'Deals',
    'Opportunities',
  ];

  activeTab = 'Lead Info';

  actionButtons = [
    {
      text: '+ Add Action',
      icon: '',
      width: '130px',
      height: '40px',
      className: 'add-action-btn',
      backgroundColor: '#4C64FF',
      textColor: '#FFFFFF',
      borderColor: 'transparent',
      borderRadius: '8px',
    },
    {
      text: '',
      icon: 'icons/ediit.png',
      width: '40px',
      height: '40px',
      className: 'icon-action-btn',
      backgroundColor: '#FFFFFF',
      textColor: '#344054',
      borderColor: 'transparent',
      borderRadius: '8px',
    },
    {
      text: '',
      icon: 'icons/arrow.png',
      width: '40px',
      height: '40px',
      className: 'icon-action-btn',
      backgroundColor: '#FFFFFF',
      textColor: '#FFFFFF',
      borderColor: 'transparent',
      borderRadius: '8px',
    },
    {
      text: '',
      icon: 'icons/dotto.png',
      width: '40px',
      height: '40px',
      className: 'icon-action-btn',
      backgroundColor: 'transparent ',
      textColor: '',
      borderColor: 'transparent',
      borderRadius: '8px',
    },
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
 