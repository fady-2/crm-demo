import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabs } from './broker-tabs';

describe('BrokerTabs', () => {
  let component: BrokerTabs;
  let fixture: ComponentFixture<BrokerTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
