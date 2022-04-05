import { createSelector } from '@reduxjs/toolkit';

const payment = ( state: any ) => state.payment;
const paymentSelector = createSelector(payment, payment => payment);

export const dataSelector:any = createSelector(
  [paymentSelector],
  payment => payment.data,
);

