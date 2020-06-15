import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoTelefono } from '../models/tipo-telefono';

@Injectable({
  providedIn: 'root'
})
export class TipoTelefonoService {

  tipoTelefonoActual: TipoTelefono;
  listaTipoTelefonos: TipoTelefono[];
  readonly URL_API = 'https://negozia-crud.herokuapp.com/negoziaback/tipoTelefonos';

  constructor(private http: HttpClient) { 
    this.tipoTelefonoActual = new TipoTelefono();
  }

  getListaTipoTelefonos () {
    return this.http.get(this.URL_API);
  }

  addTipoTelefono (telefono: TipoTelefono) {
    return this.http.post(this.URL_API, telefono);
  }

  modificarTipoTelefono (telefono: TipoTelefono) {
    return this.http.put(this.URL_API + `/${telefono._id}`, telefono);
  }

  eliminarUsuario (_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
