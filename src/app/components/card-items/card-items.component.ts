import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export class CardItemsComponent implements OnInit {
  @Input() terminada = true;
  constructor(public deseos: DeseosService, private router: Router, private alertCtrl: AlertController) {}

  ngOnInit() { }

  listaSelccionada(lista: Lista) {
    if ( this.terminada ) {
      this.router.navigate([`/tabs/agregar/${lista.id}`]);
      console.log('terminados');
    } else {
      this.router.navigate([`/tabs/agregar/${lista.id}`]);
      console.log('pendientes');


    }
  }

  async editarItem(index: number) {
    const ITEM = this.deseos.listas[index];
    const alert = await this.alertCtrl.create({
      header: 'Nuevo nombre de la lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Ingresa el nuevo nombre'

      }],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'ion-text-capitalize',
          handler: (blah) => {
            console.log(' cancelacion ');
          }
        }, {
          text: 'cambiar',
          cssClass: 'ion-text-capitalize',
          handler: (data) => {
            if (data.titulo.length > 0) {
              ITEM.titulo = data.titulo;
              this.deseos.guardarStorage();
            }
          }
        }
      ]
    });

    alert.present();
  }

  async borrarItem(index: number) {
    this.deseos.borrarItem( index );
  }
}
