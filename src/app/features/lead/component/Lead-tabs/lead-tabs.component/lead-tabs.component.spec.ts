import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTabsComponent } from './lead-tabs.component';

describe('LeadTabsComponent', () => {
  let component: LeadTabsComponent;
  let fixture: ComponentFixture<LeadTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadTabsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
