import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerFilter } from './broker-filter';

describe('BrokerFilter', () => {
  let component: BrokerFilter;
  let fixture: ComponentFixture<BrokerFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
