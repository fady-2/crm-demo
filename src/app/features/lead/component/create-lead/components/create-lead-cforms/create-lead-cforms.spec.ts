import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeadCforms } from './create-lead-cforms';

describe('CreateLeadCforms', () => {
  let component: CreateLeadCforms;
  let fixture: ComponentFixture<CreateLeadCforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLeadCforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLeadCforms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
