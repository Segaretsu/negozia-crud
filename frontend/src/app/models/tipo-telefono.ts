export class TipoTelefono {
    _id:string;
    nombre:string;

    constructor(_id = '', nombre=''){
        this._id = _id;
        this.nombre = nombre;
    }
}
