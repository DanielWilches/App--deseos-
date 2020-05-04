export class ListaItem {

    nombre: string;
    desc: string;
    completado: boolean;

    constructor(desc: string) {
        this.desc = desc;
        this.completado = false;
    }
}
