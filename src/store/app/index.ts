import slice from './slice';
import * as operations from './operations';
import * as selectors from './selectors';

export const { reducer } = slice;

export const actions = {
  ...operations,
  ...slice.actions,
};

export { selectors };