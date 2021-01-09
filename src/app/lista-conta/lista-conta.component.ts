import {  } from 'events';
import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { Conta } from '../modelo/conta.modelo';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-lista-conta',
  templateUrl: './lista-conta.component.html',
  styleUrls: ['./lista-conta.component.css']
})
export class ListaContaComponent implements OnInit {

  public contas: Conta[];
  @Output() contaEmt = new EventEmitter();

  constructor(private service: ContaService) { }

  ngOnInit(): void {
    this.buscarTodasContas();
  }

  buscarTodasContas(): void {
    this.service.buscarContas().subscribe(conta => this.contas = conta);
  }

  deletarConta(idConta: number): void {
    this.service.deletarConta(idConta).subscribe(response => { this.ngOnInit() });
  }

  visualizarConta(conta: Conta){
    this.contaEmt.emit(conta);
  }
}

