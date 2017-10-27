import { Component, OnInit } from '@angular/core';
import { SeriesService } from './../series.service';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-alta-series',
  templateUrl: './alta-series.component.html',
  styleUrls: ['./alta-series.component.css']
})
export class AltaSeriesComponent implements OnInit {

  serie: Serie;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.serie = this.serieNueva();
  }

  serieNueva(): Serie {
    return {
      nombre: '',
      temporadas: 1,
      emision: 2000
    };
  }

  onCrearSerie() {
    console.log(this.serie);
  }
}
