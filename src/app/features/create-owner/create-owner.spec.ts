import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwner } from './create-owner';

describe('CreateOwner', () => {
  let component: CreateOwner;
  let fixture: ComponentFixture<CreateOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOwner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
