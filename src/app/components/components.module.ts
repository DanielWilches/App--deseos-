import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemsComponent } from './card-items/card-items.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipes/pipe.module';




@NgModule({
  declarations: [
    CardItemsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule
  ], exports: [
    CardItemsComponent
  ]
})
export class ComponentsModule { }
