import { Component } from '@angular/core';
import { LeadTableComponent } from "../../lead-table/lead-table.component/lead-table.component";

@Component({
  selector: 'app-lead-tabs',
  imports: [LeadTableComponent],
  templateUrl: './lead-tabs.component.html',
  styleUrl: './lead-tabs.component.scss',
})
export class LeadTabsComponent {

  isActive=false;
  showData() :void{

    this.isActive=!this.isActive;
  }
}
