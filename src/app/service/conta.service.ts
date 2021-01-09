import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../app.api';
import { Conta } from '../modelo/conta.modelo';

@Injectable()
export class ContaService {

    constructor(private http: HttpClient) {
    }

    buscarContas(): Observable<Conta[]> {
        return this.http.get<Conta[]>(`${API}`)
    }

    deletarConta(id: number) {
        return this.http.delete(`${API}/${id}`)
    }

    deletarContas() {
        return this.http.delete(`${API}`)
    }

    buscarContaId(id: string): Observable<Conta> {
        return this.http.get<Conta>(`${API}/${id}`)
    }

    cadastrarConta(conta: Conta) {
        return this.http.post(`${API}`, conta, {
            observe: 'response',
            responseType: 'text'
        });
    }
}