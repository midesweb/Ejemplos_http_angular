import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Serie } from './../serie.model';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent implements OnInit {

  @Input()
  series: Serie[];

  @Output()
  borrarSerie = new EventEmitter<Serie>();

  constructor() { }

  ngOnInit() {
  }

  onBorrarSerie(serie: Serie) {
    this.borrarSerie.emit(serie);
  }
}
