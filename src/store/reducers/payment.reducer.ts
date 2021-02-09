import {CreditCardModel} from '../../models/creditCard.model';
import {PaymentAction, paymentActionTypes} from '../actions/payment.actions';


export function paymentReducer(state: CreditCardModel, action: PaymentAction) {
  switch (action.type) {
    case paymentActionTypes.ADD_PAYMENT:
      return action.payload;
    default:
      return state;
  }
}
