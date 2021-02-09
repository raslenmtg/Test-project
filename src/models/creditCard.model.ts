export interface CreditCardModel {
  creditCardNUmber: number;
  cardHolder: string;
  expirationDate: Date;
  ccv?: string;
  amount: number;
}
