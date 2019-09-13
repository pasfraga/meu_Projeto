import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;

  constructor(
    protected usuarioService: UsuarioService,
    private router:Router
    
  ) { }

  ngOnInit() {
  }
  onsubmit(form){
    console.log(this.usuario);
    this.usuarioService.save(this.usuario)
      .subscribe(
        res=>{
          console.log("Cadastrado!",res);
          alert("Cadastrado!");
          //this.router.navigate(['/']);
          this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this.router.navigate(['/addusuario'])); 
        },
        erro=>{
          console.log("Não Cadastrado",erro);
          alert("Não Cadastrado");
        }
      )
  }
}
