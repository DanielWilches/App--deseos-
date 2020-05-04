import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrolistPipe } from './filtrolist.pipe';



@NgModule({
  declarations: [
  FiltrolistPipe

  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltrolistPipe
  ]
})
export class PipeModule { }
