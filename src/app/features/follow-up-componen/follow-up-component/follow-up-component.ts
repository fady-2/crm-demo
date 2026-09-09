import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedStatus } from '../folow-model';
import { StatusTagShared } from '../../../shared/components/status-tag-shared/status-tag-shared';

@Component({
  selector: 'app-follow-up-component',
  standalone: true,
  imports: [CommonModule, StatusTagShared],
  templateUrl: './follow-up-component.html',
  styleUrl: './follow-up-component.scss',
})
export class FollowUpComponent {
  items: SharedStatus[] = [
    {
      label: 'Follow Up',
      background: '#EFF8FF',
       

      color:'#175CD3',
      date: '2022-10-24 14:09:29',
      
    },
    {
      
     
      label: 'Follow Up',
      background:'#F2F4F7',
      color: '#344054',
      date: '2780-10-24 14:09:29'
    },
    {
       

      label: 'Down',
      background:'#FFFAEB',

      color: '#B54708',
      date: '2054-10-24 14:09:29'
    },
      {

       

      label: 'Down',
      background:'#ECFDF3',

      color: '#027A48',
      date: '2054-10-24 14:09:29'
    },
      {
       

      label: 'Down',
      background:'#FEF3F2',

      color: '#B42318',
      date: '2054-10-24 14:09:29'
    }
  ];
}