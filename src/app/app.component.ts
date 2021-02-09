import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CreditCardModel} from '../models/creditCard.model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/appState.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  creditCard$: Observable<CreditCardModel>;

  constructor(private store: Store<AppState>) {
    this.creditCard$ = this.store.select('creditCard');
  }
}
