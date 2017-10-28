import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SeriesService } from './../series.service';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  nuevaSerie: Serie;
  series$: Observable<Serie[]>;

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.recuperarSeries();
    this.nuevaSerie = this.seriesService.nuevoObjetoSerie();
    this.series$ = this.seriesService.obtenerSeries$();
  }

  onBorrarSerie(serie: Serie) {
    this.seriesService.borrarSerie(serie).subscribe(
      (response) => this.recuperarSeries(),
      (error) => console.log(error)
    );
  }

  onCrearSerie(serie) {
    this.seriesService.guardarSerie(serie).subscribe(
      (response) => {
        console.log(response);
        this.nuevaSerie = this.seriesService.nuevoObjetoSerie();
        this.recuperarSeries();
      },
      (error) => console.log(error)
    );
  }

  recuperarSeries() {
    this.seriesService.recuperarSeries();
  }

}
