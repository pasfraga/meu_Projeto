import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { AddEventoService } from '../../services/add-evento.service';

@Component({
  selector: 'app-list-add-evento',
  templateUrl: './list-add-evento.component.html',
  styleUrls: ['./list-add-evento.component.css']
})
export class ListAddEventoComponent implements OnInit {

  protected eventos:any;

  constructor(
    protected eventoService:AddEventoService
  ) { }

  ngOnInit() {
    this.eventos = this.eventoService.getAll();
  }

}
