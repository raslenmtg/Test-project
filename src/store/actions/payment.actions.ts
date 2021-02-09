import {Action} from '@ngrx/store';
import {CreditCardModel} from '../../models/creditCard.model';

export enum paymentActionTypes {
  ADD_PAYMENT = '[PAYMENT] Add credit card',
  ADD_PAYMENT_SUCCESS = '[PAYMENT] Load payment Success',
  ADD_PAYMENT_FAILURE = '[PAYMENT] Load payment Failure',
}

export class AddPaymentAction implements Action {
  readonly type = paymentActionTypes.ADD_PAYMENT;

  constructor(public payload: CreditCardModel) {
  }
}

export class AddPaymentSuccessAction implements Action {
  readonly type = paymentActionTypes.ADD_PAYMENT_SUCCESS;

  constructor() {
  }
}

export class AddPaymentFailureAction implements Action {
  readonly type = paymentActionTypes.ADD_PAYMENT_FAILURE;

  constructor() {
  }
}

export type PaymentAction = AddPaymentAction |
  AddPaymentSuccessAction |
  AddPaymentFailureAction;
