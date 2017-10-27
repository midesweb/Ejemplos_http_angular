import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesService } from './series.service';
import { AltaSeriesComponent } from './alta-series/alta-series.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AltaSeriesComponent
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
    AltaSeriesComponent
  ]
})
export class SeriesModule { }
