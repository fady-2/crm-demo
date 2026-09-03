import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterationComponent } from './filteration.component';

describe('FilterationComponent', () => {
  let component: FilterationComponent;
  let fixture: ComponentFixture<FilterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
