import { Component, Input } from '@angular/core';
import { Conta } from '../modelo/conta.modelo';

@Component({
  selector: 'app-visualizar-conta',
  templateUrl: './visualizar-conta.component.html',
  styleUrls: ['./visualizar-conta.component.css']
})
export class VisualizarContaComponent {
  @Input() conta: Conta;
}
