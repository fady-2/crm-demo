import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaLogDetails } from './meta-log-details';

describe('MetaLogDetails', () => {
  let component: MetaLogDetails;
  let fixture: ComponentFixture<MetaLogDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaLogDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaLogDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
