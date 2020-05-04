import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem: string;
  constructor(private route: Router, public Deseos: DeseosService, private ActRoute: ActivatedRoute) {
    const IDLIST = this.ActRoute.snapshot.paramMap.get('listaId');
    this.lista = this.Deseos.obtenerLista(IDLIST);
  }

  ngOnInit() { }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const NUEVOITEM = new ListaItem(this.nombreItem);
    this.lista.items.push(NUEVOITEM);
    console.log(this.nombreItem);
    this.nombreItem = '';
    this.Deseos.guardarStorage();
  }

  cambiocheck(item: ListaItem) {
    const PENDIENTES = this.lista.items.filter(itemData => !itemData.completado).length;
    if (PENDIENTES === 0) {
      this.lista.terminadaEN = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEN = null;
      this.lista.terminada = false;
    }
    this.Deseos.guardarStorage();
    console.log(this.Deseos.listas);
  }
  borrarItem(index: number) {
    this.lista.items.splice(index, 1);
    this.Deseos.guardarStorage();
  }
  goPegetab1() {
    this.route.navigateByUrl('/tabs/tab1');
  }
}
