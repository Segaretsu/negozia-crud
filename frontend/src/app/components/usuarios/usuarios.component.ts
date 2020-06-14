import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { TipoTelefonoService } from '../../services/tipo-telefono.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { TipoTelefono } from 'src/app/models/tipo-telefono';

declare var M: any; // Declaramos una variable de Materialize

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public tipoTelefonoService: TipoTelefonoService) {
    
  }

  ngOnInit(): void {
    this.tipoTelefonoService.getListaTipoTelefonos().subscribe(res => {
      this.tipoTelefonoService.listaTipoTelefonos = res as TipoTelefono[];
    });
    this.getUsuarios();
  }

  addUsuario(form: NgForm){
    if(this.validarUsuario(form.value)) {
      if(form.value._id){
        this.usuarioService.modificarUsuario(form.value)
        .subscribe(res => {
          this.limpiarFormulario(form);
          M.toast({html:'Updated successfuly', classes:'green'});
          this.getUsuarios();
        });
      } else {
        this.usuarioService.addUsuario(form.value)
        .subscribe(res => {
          this.limpiarFormulario(form);
          M.toast({html:'save successfuly', classes:'green'});
          this.getUsuarios();
        }); // Nos sirve para saber que retorna el servidor
      }
    } else {
      M.toast({html:'validate the information', classes:'red'});
    }
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe( res => {
      this.usuarioService.listaUsuarios = res as Usuario[];
    }
    );
  }

  modificarUsuario (usuario: Usuario) {
    this.usuarioService.usuarioSeleccionado = usuario;
  }

  eliminarUsuario (_id: string) {
    if(confirm('Are you sure you want to delete it?')){
      this.usuarioService.eliminarUsuario(_id)
        .subscribe(res => {
          this.getUsuarios();
          M.toast({html: 'User deleted successfully', classes:'red'});
        });
    }
  }

  limpiarFormulario (form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.usuarioSeleccionado = new Usuario();
    }
  }

  /* Validaciones de usuario */
  onItemChange(value){
    console.log(" Value is : ", value );
  }

  validarUsuario (usuario: Usuario) {
    this.eliminarEspaciosLaterales(usuario);
    if(usuario.nombres && usuario.nombres.length < 50){
      if(usuario.apellidos && usuario.apellidos.length < 50){
         if(usuario.sexo){
           if(usuario.telefono && usuario.telefono.toString().length < 12 && usuario.telefono != 0){
            if(usuario.tipoTelefono){
              if(usuario.correo){
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.correo)){
                  return true;
                }
              }
            }
           }
        }
      }
    }
    return false;
  }

  eliminarEspaciosLaterales(usuario: Usuario){
    try {
      usuario.nombres.trim();
      usuario.apellidos.trim();
      usuario.sexo.trim();
      usuario.tipoTelefono.trim();
    } catch (error) {}
  }

}
