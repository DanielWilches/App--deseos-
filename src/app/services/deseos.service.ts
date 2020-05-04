import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable()
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }
  crearLista(titulo?: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }
  borrarItem(index: number) {
    this.listas.splice(index, 1);
    this.guardarStorage();
  }


  obtenerLista(id: number | string) {
    id = Number(id);
    return this.listas.find((listData) => {
      return listData.id === id;
    });

  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      console.log('arreglo vacio ');
    }
  }

  removerLista() { }



}
