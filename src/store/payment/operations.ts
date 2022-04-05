import createOperation from '../createOperation';
import slice from './slice';
import { Product } from 'src/mocks/payment.mock';
const { actions } = slice;

// Create Operation call api
export const getData = createOperation({
  actions: {
    successAction: actions.getDataSuccess
  },

  async process({payload: params}) {
    const data: any = Product;
    return data;
  }
});
