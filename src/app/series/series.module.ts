import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesService } from './series.service';
import { AltaSeriesComponent } from './alta-series/alta-series.component';

@NgModule({
  declarations: [
    AltaSeriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    SeriesService
  ],
  exports: [
    AltaSeriesComponent
  ]
})
export class SeriesModule { }
