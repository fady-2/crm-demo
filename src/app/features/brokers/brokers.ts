import { Component } from '@angular/core';
import { BrokerHeader } from './components/broker-header/broker-header';
import { BrokerTable } from './components/broker-table/broker-table';
import { BrokerTabs } from './components/broker-tabs/broker-tabs';
import { BrokerSearch } from './components/broker-search/broker-search';
import { BrokerFilter } from './components/broker-filter/broker-filter';

@Component({
  selector: 'app-brokers',
  imports: [BrokerHeader, BrokerTable, BrokerTabs, BrokerSearch, BrokerFilter],
  templateUrl: './brokers.html',
  styleUrl: './brokers.scss',
})
export class Brokers {}
