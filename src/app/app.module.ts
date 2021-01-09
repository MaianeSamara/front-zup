import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CadastraContaComponent } from './cadastra-conta/cadastra-conta.component';
import { ListaContaComponent } from './lista-conta/lista-conta.component';
import { VisualizarContaComponent } from './visualizar-conta/visualizar-conta.component';
import { ContaService } from './service/conta.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CadastraContaComponent,
    ListaContaComponent,
    VisualizarContaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
      ],
  providers: [
    ContaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
