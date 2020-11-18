import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  createRequest(form,items,vencimiento){
   return  this.http.post('http://api.grupopiero.com/formulario-venta-empresa-back/public/api/createRequest',{form,items,vencimiento})
  }
}
