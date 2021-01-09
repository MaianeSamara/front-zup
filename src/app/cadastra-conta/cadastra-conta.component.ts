import { Component, OnInit } from '@angular/core';
import { ContaService } from '../service/conta.service';

@Component({
  selector: 'app-cadastra-conta',
  templateUrl: './cadastra-conta.component.html',
  styleUrls: ['./cadastra-conta.component.css']
})
export class CadastraContaComponent implements OnInit {

  public erroNoCadastro : string[] = [];
  constructor(private service: ContaService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.service.cadastrarConta(form).subscribe(() => {
      alert('Cadastrado Com Sucesso!.')
      location.reload();
    }, erro => {
      const erroNoCadastro = JSON.parse(erro.error);
      this.lerResposta(erroNoCadastro);
    });
  }

  lerResposta(erro: any): void{
    erro.erros.forEach(erro => {
      this.erroNoCadastro.push(erro.mensagem);
    });
  }
}
