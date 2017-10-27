import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Serie } from './serie.model';

@Injectable()
export class SeriesService {

  constructor(private http: Http) { }

  guardarSerie(serie: Serie) {
    return this.http.post('http://localhost:3000/series', serie);
  }

  recuperarSeries() {
    return this.http.get('http://localhost:3000/series');
  }

  borrarSerie(serie) {
    return this.http.delete('http://localhost:3000/series/' + serie.id);
  }
}
