import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


import { Serie } from './serie.model';

@Injectable()
export class SeriesService {

  private clientes$: Subject<Serie[]> = new Subject<Serie[]>();

  constructor(private http: Http) { }

  guardarSerie(serie: Serie) {
    return this.http.post('http://localhost:3000/series', serie);
  }

  recuperarSeries() {
    this.http.get('http://localhost:3000/series')
      .map( (response) => response.json() )
      .subscribe( (response) => this.clientes$.next(response) );
  }

  borrarSerie(serie) {
    return this.http.delete('http://localhost:3000/series/' + serie.id);
  }

  nuevoObjetoSerie(): Serie {
    return {
      nombre: '',
      temporadas: 1,
      emision: 2000
    };
  }

  obtenerSeries$(): Observable<Serie[]> {
    return this.clientes$.asObservable();
  }
}
