import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtons } from './shared-buttons';

describe('SharedButtons', () => {
  let component: SharedButtons;
  let fixture: ComponentFixture<SharedButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
