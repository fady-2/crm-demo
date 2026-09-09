import { Component } from '@angular/core';
import { SharedButtons } from '../../../../shared/components/shared-button/shared-buttons/shared-buttons';

@Component({
  selector: 'app-lead-details',
  standalone: true,
  imports: [SharedButtons],
  templateUrl: './lead-details.html',
  styleUrl: './lead-details.scss',
})
export class LeadDetails {
  // بيانات النجوم (التقييم)
  stars = [1, 2, 3, 4, 5];
  rating = 3;

  // التابات اللي فوق
  tabs = ['Lead Info', 'Comments', 'Timeline Log', 'Attachments', 'Deals', 'Opportunities'];
  activeTab = 'Lead Info';

  // بيانات الـ Lead
  lead = {
    name: 'Moaz Elramsisy',
    email: 'moaz@engazcrm.com',
    mobile1: '+(20) 10 163 24799',
    mobile2: '+(20) 10 163 24799',
    communicateWay: 'Phone',
    channel: 'Aqaar Map',
    status: 'Follow Up',
    creationDate: '7/5/23, 3:37 PM',
    lastUpdate: '40 day(s) ago',
    salesRep: 'Abdo Mahmoud',
    salesRepEmail: 'abdo@mahmoud.com',
  };

  // بيانات جدول المشاريع
  projects = [
    {
      number: 1,
      project: 'Anakaji',
      channel: 'Facebook',
      salesman: 'Moaz Elr...',
      createdBy: 'Moaz Elr...',
      creationDate: '2022-10-19 12:57:40',
      status: 'Done Deal',
    },
  ];

  // زرار Add Action هيستخدم الشيرد باتن
  addActionButton = {
    text: 'Add Action',
    backgroundColor: '#4C64FF',
    textColor: '#FFFFFF',
    className: 'add-action',
    icon: 'icons/plus-white.png',
  };

  // تغيير التاب النشط
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}