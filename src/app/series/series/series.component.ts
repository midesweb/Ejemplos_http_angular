import { Component, OnInit } from '@angular/core';

import { SeriesService } from './../series.service';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  nuevaSerie: Serie;
  series: Serie[];

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesService.recuperarSeries().subscribe(
      (response) => this.series = response.json()
    );
    this.nuevaSerie = this.seriesService.nuevoObjetoSerie();
  }

  onBorrarSerie(serie: Serie) {
    this.seriesService.borrarSerie(serie).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onCrearSerie(serie) {
    this.seriesService.guardarSerie(serie).subscribe(
      (response) => {
        console.log(response);
        this.nuevaSerie = this.seriesService.nuevoObjetoSerie();
      },
      (error) => console.log(error)
    );
  }

}
