import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-alta-series',
  templateUrl: './alta-series.component.html',
  styleUrls: ['./alta-series.component.css']
})
export class AltaSeriesComponent implements OnInit {

  @Input()
  serie: Serie;

  @Output()
  crearSerie = new EventEmitter<Serie>();

  constructor() { }

  ngOnInit() {
  }

  onCrearSerie() {
    this.crearSerie.emit(this.serie);
  }

}
