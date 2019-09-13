import { Component, OnInit } from '@angular/core';
import { AddEvento } from '../../model/add-evento';
import { AddEventoService } from '../../services/add-evento.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  protected evento:AddEvento = new AddEvento;

  constructor(
    protected eventoService: AddEventoService,
    private router:Router
    
  ) { }

  ngOnInit() {
  }
  onsubmit(form){
    console.log(this.evento);
    this.eventoService.save(this.evento)
      .subscribe(
        res=>{
          console.log("Evento Cadastrado!",res);
          alert("Evento Cadastrado!");
          //this.router.navigate(['/']);
          this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() =>
            this.router.navigate(['/addevento'])); 
        },
        erro=>{
          console.log("Evento Não Cadastrado",erro);
          alert("Evento Não Cadastrado");
        }
      )
  }

}
