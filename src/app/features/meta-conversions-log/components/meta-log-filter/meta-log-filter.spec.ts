import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaLogFilter } from './meta-log-filter';

describe('MetaLogFilter', () => {
  let component: MetaLogFilter;
  let fixture: ComponentFixture<MetaLogFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaLogFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaLogFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
