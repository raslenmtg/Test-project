import { Injectable } from '@angular/core';
import {CreditCardModel} from '../models/creditCard.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  createPayment(creditCard: CreditCardModel): Observable<any>{
    return this.http.post(environment.server_URL, JSON.stringify(creditCard));
  }
}
