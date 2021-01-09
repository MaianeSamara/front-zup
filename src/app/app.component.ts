import { Component } from '@angular/core';
import { Conta } from './modelo/conta.modelo';
import { ContaService } from './service/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public conta: Conta;
  constructor(private service: ContaService) { }
  
  ngOnInit(): void {
  }
  
  visualizarConta(conta): void{
    this.conta = conta;
  }

  deletarTodasContas(): void{
    this.service.deletarContas().subscribe();
    this.iniciar();
  }

  iniciar(){
    location.reload();
  }
}
