import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtrolist',
  pure: false
})
export class FiltrolistPipe implements PipeTransform {

  transform(lista: Lista[], completado: boolean = true): Lista[] {
    return lista.filter( lista => lista.terminada === completado );
  }

}
