import createOperation from '../createOperation';
import slice from './slice';
const { actions } = slice;

export const actionExtra = createOperation({
  actions: {
    successAction: null,
  },
  async process() {
    return null;
  },
});