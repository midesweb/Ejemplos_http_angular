import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSeriesComponent } from './listado-series.component';

describe('ListadoSeriesComponent', () => {
  let component: ListadoSeriesComponent;
  let fixture: ComponentFixture<ListadoSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
