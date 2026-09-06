import { Component } from '@angular/core';
// import { BrokerHeader } from './components/broker-header/broker-header';
// import { BrokerTable } from './components/broker-table/broker-table';
// import { BrokerTabs } from './components/broker-tabs/broker-tabs';
// import { BrokerSearch } from './components/broker-search/broker-search';
import { BrokerFilter } from './components/broker-filter/broker-filter';
import { HeaderComponent } from "../../shared/components/shared-header.component/header.component";
import { HeaderAction } from '../../shared/components/shared-header.component/header-action.model';
import { SharedSearchComponent } from "../../shared/UI/shared-search.component/shared-search.component";
import { TapsComponent } from "../../shared/UI/taps.component/taps.component";
import { Broker } from './models/broker.model';
import { TableColumn } from '../../shared/components/shared-table.component/column.model';
import { SharedTableComponent } from "../../shared/components/shared-table.component/shared-table.component";

@Component({
  selector: 'app-brokers',
  standalone: true,
  imports: [/*BrokerHeader, BrokerTable, BrokerTabs, BrokerSearch,*/ BrokerFilter, HeaderComponent, SharedSearchComponent, TapsComponent, SharedTableComponent],
  templateUrl: './brokers.html',
  styleUrl: './brokers.scss',
})
export class Brokers {
  title = 'Brokers';
  description = 'Manage your Brokers and their information';
  actions: HeaderAction[] = [
    { label: 'Import Brokers', icon: 'pi pi-upload', severity: 'secondary', outlined: true },
    { label: 'Create Broker', icon: 'pi pi-plus', severity: 'primary' },
  ];
  handleActionClicked(action: HeaderAction) {
    if (action.label === 'Create Broker') {
      this.onCreateBroker();
    } else if (action.label === 'Import Brokers') {
      this.onImportBrokers();
    }
  }
  onCreateBroker() {
    console.log("Create Brokers Clicked")
  }
  onImportBrokers() {
    console.log("Import Brokers Clicked")

  }

  //##################################################
  columns: TableColumn<Broker>[] = [
    { key: 'name', label: 'Name' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'assigendTo', label: 'Assigned To' },
    { key: 'requests', label: 'Requests' },
    { key: 'stage', label: 'Stage', },
    { key: 'project', label: 'Project' },
    { key: 'probertyType', label: 'Property Type' },
    { key: 'lastComment', label: 'Last Comment' },
  ]

  data: Broker[] = [
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
