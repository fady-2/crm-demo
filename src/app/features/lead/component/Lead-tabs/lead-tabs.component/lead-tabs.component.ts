import { Component } from '@angular/core';

@Component({
  selector: 'app-lead-tabs',
  templateUrl: './lead-tabs.component.html',
  styleUrl: './lead-tabs.component.scss',
})
export class LeadTabsComponent {

  isActive=false;
  showData() :void{

    this.isActive=!this.isActive;
  }
}
