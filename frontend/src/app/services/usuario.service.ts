import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioSeleccionado: Usuario;
  listaUsuarios: Usuario[];
  readonly URL_API = 'https://negozia-crud.herokuapp.com/negoziaback/usuarios';

  constructor(private http: HttpClient) { 
    this.usuarioSeleccionado = new Usuario();
  }

  getUsuarios () {
    return this.http.get(this.URL_API);
  }

  addUsuario (Usuario: Usuario) {
    return this.http.post(this.URL_API, Usuario);
  }

  modificarUsuario (Usuario: Usuario) {
    return this.http.put(this.URL_API + `/${Usuario._id}`, Usuario);
  }

  eliminarUsuario (_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }


}
