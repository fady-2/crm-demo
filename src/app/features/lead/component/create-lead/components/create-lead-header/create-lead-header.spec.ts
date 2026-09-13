import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeadHeader } from './create-lead-header';

describe('CreateLeadHeader', () => {
  let component: CreateLeadHeader;
  let fixture: ComponentFixture<CreateLeadHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLeadHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLeadHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
