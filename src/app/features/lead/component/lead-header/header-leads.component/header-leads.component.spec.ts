import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeadsComponent } from './header-leads.component';

describe('HeaderLeadsComponent', () => {
  let component: HeaderLeadsComponent;
  let fixture: ComponentFixture<HeaderLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLeadsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
