import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTable } from './broker-table';

describe('BrokerTable', () => {
  let component: BrokerTable;
  let fixture: ComponentFixture<BrokerTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
