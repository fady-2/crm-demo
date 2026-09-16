import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaConversionsLog } from './meta-conversions-log';

describe('MetaConversionsLog', () => {
  let component: MetaConversionsLog;
  let fixture: ComponentFixture<MetaConversionsLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaConversionsLog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaConversionsLog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
