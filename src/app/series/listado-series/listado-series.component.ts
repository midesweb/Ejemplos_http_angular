import { Component, OnInit } from '@angular/core';

import { SeriesService } from './../series.service';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.component.html',
  styleUrls: ['./listado-series.component.css']
})
export class ListadoSeriesComponent implements OnInit {

  series: Serie;
  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesService.recuperarSeries().subscribe(
      (response) => this.series = response.json()
    );
  }

  borrarSerie(serie: Serie) {
    this.seriesService.borrarSerie(serie).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
