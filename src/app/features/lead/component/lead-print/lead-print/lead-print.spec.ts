import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadPrint } from './lead-print';

describe('LeadPrint', () => {
  let component: LeadPrint;
  let fixture: ComponentFixture<LeadPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadPrint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
