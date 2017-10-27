import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSeriesComponent } from './alta-series.component';

describe('AltaSeriesComponent', () => {
  let component: AltaSeriesComponent;
  let fixture: ComponentFixture<AltaSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
