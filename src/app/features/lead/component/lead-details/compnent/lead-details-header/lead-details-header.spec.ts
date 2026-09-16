import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDetailsHeader } from './lead-details-header';

describe('LeadDetailsHeader', () => {
  let component: LeadDetailsHeader;
  let fixture: ComponentFixture<LeadDetailsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadDetailsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadDetailsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
