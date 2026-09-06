import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/shared-header.component/header.component';
import { TableComponent } from "./components/table.component/table.component";
import { PaginatorComponent } from './components/paginator.component/paginator.component';
import { FilterationComponent } from "./components/filteration.component/filteration.component";
import { TapsComponent } from "./components/taps.component/taps.component";
import { HeaderAction } from '../../shared/components/shared-header.component/header-action.model';
import { Owner } from './models/owner.model';
import { TableColumn } from '../../shared/components/shared-table.component/column.model';
import { SharedTableComponent } from "../../shared/components/shared-table.component/shared-table.component";

@Component({
  selector: 'app-owner-page',
  standalone: true,
  imports: [HeaderComponent, TableComponent, PaginatorComponent, FilterationComponent, TapsComponent, SharedTableComponent],
  templateUrl: './owner-page.component.html',
  styleUrl: './owner-page.component.scss',
})
export class OwnerPageComponent {
  title = 'Owners';
  description = 'Manage your owners and their information';
  actions: HeaderAction[] = [
    { label: 'Import Owners', icon: 'pi pi-upload', severity: 'secondary', outlined: true },
    { label: 'Create Owner', icon: 'pi pi-plus', severity: 'primary' },
  ];
  handleActionClicked(action: HeaderAction) {
    if (action.label === 'Create Owner') {
      this.onCreateOwner();
    } else if (action.label === 'Import Owners') {
      this.onImportOwners();
    }
  }
  onCreateOwner() {
    console.log("Create Onwers Clicked")
  }
  onImportOwners() {
    console.log("Import Owners Clicked")

  }
  //##################################################
  columns: TableColumn<Owner>[] = [
    { key: 'name', label: 'Name' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'assigendTo', label: 'Assigned To' },
    { key: 'requests', label: 'Requests' },
    { key: 'stage', label: 'Stage', },
    { key: 'project', label: 'Project' },
    { key: 'probertyType', label: 'Property Type' },
    { key: 'lastComment', label: 'Last Comment' },
  ]

  data: Owner[] = [
    {
      id: 1,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Fresh',
      project: 'Aljoman',
      probertyType: 'Villa',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
    {
      id: 2,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Showing',
      project: 'Aljoman',
      probertyType: 'Shop',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
      action: 'Phone Call'
    },
    {
      id: 3,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Deal',
      project: 'Aljoman',
      probertyType: 'Department',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
    {
      id: 4,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Sale',
      project: 'Aljoman',
      probertyType: 'Villa',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
    {
      id: 5,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Rent',
      project: 'Aljoman',
      probertyType: 'Villa',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
    {
      id: 6,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Not Sale',
      project: 'Aljoman',
      probertyType: 'Department',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
    {
      id: 7,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Archive',
      project: 'Aljoman',
      probertyType: 'Department',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
    {
      id: 8,
      name: 'Moaz Elramsisy',
      mobile: '+(20) 10 1623 4799',
      assigendTo: 'Moaz Elramsisy',
      requests: 1,
      stage: 'Deal',
      project: 'Aljoman',
      probertyType: 'Department',
      currentActoin: 'Follow Up',
      lastComment: 'he is not interested',
    },
  ];
}
