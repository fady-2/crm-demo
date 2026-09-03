import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerSearch } from './broker-search';

describe('BrokerSearch', () => {
  let component: BrokerSearch;
  let fixture: ComponentFixture<BrokerSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
