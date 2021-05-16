import { Transferencia } from './../models/Transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private _listaTransferencia: any[];
  private _url = "http://localhost:3000/transferencias";

  constructor(private _httpClient: HttpClient) {
    this._listaTransferencia = [];
  }

  get transferencias(){
    return this._listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this._httpClient.get<Transferencia[]>(this._url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this._hidratar(transferencia);

    return this._httpClient.post<Transferencia>(this._url, transferencia)
  }

  private _hidratar(transferencia: Transferencia) {
    transferencia.data = new Date()
  }

}
