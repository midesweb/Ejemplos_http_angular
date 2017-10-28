import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Serie } from './../serie.model';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent implements OnInit, OnDestroy {

  series: Serie[];
  seriesSubscription: Subscription;

  @Input()
  series$: Observable<Serie[]>;

  @Output()
  borrarSerie = new EventEmitter<Serie>();

  constructor() { }

  ngOnInit() {
    this.seriesSubscription = this.series$.subscribe( series => this.series = series );
  }

  ngOnDestroy() {
    this.seriesSubscription.unsubscribe();
  }

  onBorrarSerie(serie: Serie) {
    this.borrarSerie.emit(serie);
  }
}
