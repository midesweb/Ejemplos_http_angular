import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesService } from './series.service';
import { AltaSeriesComponent } from './alta-series/alta-series.component';
import { HttpModule } from '@angular/http';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { ItemSerieComponent } from './item-serie/item-serie.component';

@NgModule({
  declarations: [
    AltaSeriesComponent,
    ListadoSeriesComponent,
    ItemSerieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SeriesService
  ],
  exports: [
    AltaSeriesComponent,
    ListadoSeriesComponent
  ]
})
export class SeriesModule { }
