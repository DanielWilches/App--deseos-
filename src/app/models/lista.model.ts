import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEN: Date;
    terminadaEN: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.creadaEN = new Date();
        this.terminadaEN = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
