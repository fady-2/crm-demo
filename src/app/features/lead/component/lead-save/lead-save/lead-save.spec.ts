import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSave } from './lead-save';

describe('LeadSave', () => {
  let component: LeadSave;
  let fixture: ComponentFixture<LeadSave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadSave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadSave);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
