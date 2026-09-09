import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSearch } from './lead-search';

describe('LeadSearch', () => {
  let component: LeadSearch;
  let fixture: ComponentFixture<LeadSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
