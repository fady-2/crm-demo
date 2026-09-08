import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTagComponent } from './shared-tag.component';

describe('SharedTagComponent', () => {
  let component: SharedTagComponent;
  let fixture: ComponentFixture<SharedTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedTagComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
