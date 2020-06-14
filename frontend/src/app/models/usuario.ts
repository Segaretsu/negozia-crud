export class Usuario {
    _id: String;
    nombres: string;
    apellidos: string;
    sexo: string;
    telefono: number;
    tipoTelefono: string;
    correo: string;

    constructor(_id = '', nombres = '', apellidos = '',
     sexo = '', telefono = 0, tipoTelefono = '', correo = '') {
        this._id = _id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.telefono = telefono;
        this.tipoTelefono = tipoTelefono;
        this.correo = correo;
    }
}
