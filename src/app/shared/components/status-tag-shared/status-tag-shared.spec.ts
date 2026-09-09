import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTagShared } from './status-tag-shared';

describe('StatusTagShared', () => {
  let component: StatusTagShared;
  let fixture: ComponentFixture<StatusTagShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTagShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTagShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
