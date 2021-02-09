import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {CreditCardModel} from '../../models/creditCard.model';
import {AddPaymentAction} from '../../store/actions/payment.actions';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent implements OnInit {
  creditCardForm = this.fb.group({
    creditCardNUmber: ['', Validators.required],
    cardHolder: ['', Validators.required],
    expirationDate: ['', Validators.required],
    ccv: ['', Validators.minLength(3)],
    amount: ['', [Validators.min(1), Validators.required] as any],
  });

  constructor(private fb: FormBuilder, private store: Store<CreditCardModel>,) {
  }

  ngOnInit(): void {
  }

  submitPayment(): void {
    if (this.creditCardForm.invalid) {
      return;
    }
    this.store.dispatch(new AddPaymentAction(this.creditCardForm.getRawValue()));
  }

  get form() {
    return this.creditCardForm.controls;
  }

  get currentDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }
}
