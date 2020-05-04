import { Component} from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  list: Lista[] = [];
  newList: Lista[];
  constructor(private deseos: DeseosService) {
    this.newList = this.obtenerTeminadas(this.deseos.listas);

  }
  obtenerTeminadas(lista: Lista[]) {
    lista.forEach((data: any) => {
      if (data.terminada) {
        this.list.push(data);
      }
    });
    return this.list;
  }

}
