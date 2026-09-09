import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadExport } from './lead-export';

describe('LeadExport', () => {
  let component: LeadExport;
  let fixture: ComponentFixture<LeadExport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadExport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadExport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
