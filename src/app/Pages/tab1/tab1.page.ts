import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title: string;
  abrirCard: boolean;
  lista: Lista[];
  constructor(private router: Router, public Deseos: DeseosService, private alertCtrl: AlertController) {
    this.abrirCard = false;
  }

  async agregarLista() {
    const ALERTCREATELISTA = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => console.log('cancelar'),
      }, {
        text: 'Crear',
        handler: (data) => {
          if (data.titulo.length > 0) {
            const LISTAID = this.Deseos.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/agregar/${LISTAID}`);
          }
          return;
        },
      }]
    });
    ALERTCREATELISTA.present();
  }
}
