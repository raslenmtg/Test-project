import {Injectable} from '@angular/core';
import {PaymentService} from '../../services/payment.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {of} from 'rxjs';
import {AddPaymentAction, AddPaymentFailureAction, AddPaymentSuccessAction, paymentActionTypes} from '../actions/payment.actions';
import {CreditCardModel} from '../../models/creditCard.model';

@Injectable()
export class PaymentEffects {

  @Effect() addPayment$ = this.actions$
    .pipe(
      ofType<AddPaymentAction>(paymentActionTypes.ADD_PAYMENT),
      mergeMap(
        (data) => this.paymentService.createPayment(data.payload as CreditCardModel)
          .pipe(
            map(() => new AddPaymentSuccessAction()
            ),
            catchError(error => of(new AddPaymentFailureAction()))
          )
      )
    );

  @Effect({dispatch: false}) PaymentSuccess$ = this.actions$
    .pipe(
      ofType<AddPaymentAction>(paymentActionTypes.ADD_PAYMENT_SUCCESS),
      map(() => this.snackBar.open('Payment Success', 'Success', {
        duration: 2000,
        panelClass: ['sucess-snackbar']
      }))
    );


  @Effect({dispatch: false}) PaymentError$ = this.actions$
    .pipe(
      ofType<AddPaymentAction>(paymentActionTypes.ADD_PAYMENT_FAILURE),
      map(() => this.snackBar.open('Payment Error', 'Error', {
        duration: 5000,
        panelClass: ['error-snackbar']
      }))
    );

  constructor(
    private actions$: Actions,
    private paymentService: PaymentService,
    private snackBar: MatSnackBar
  ) {
  }
}
