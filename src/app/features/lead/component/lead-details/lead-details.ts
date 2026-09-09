
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedButtons } from '../../../../shared/components/shared-button/shared-buttons/shared-buttons';
import { Lead } from './lead.model';

@Component({
  selector: 'app-lead-details',
  standalone: true,
  imports: [CommonModule, SharedButtons],
  templateUrl: './lead-details.html',
  styleUrl: './lead-details.scss',
})
export class LeadDetails {
  @Input() lead!: Lead;

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
      borderColor: '#4C64FF',
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
      borderColor: '#FFFFFF',
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
      borderColor: '#D0D5DD',
    borderRadius: '8px',

    },
   {
  text: '',
  width: '1px',
  height: '',
  icon: 'icons/dot.png',

  borderRadius: null,

  className: 'icon-action-btn',
  backgroundColor: 'none',
  textColor: '',
  borderColor: '#FFFFFF'
},
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}