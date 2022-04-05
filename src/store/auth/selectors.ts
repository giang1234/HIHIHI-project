import { createSelector } from '@reduxjs/toolkit';

const auth = ( state: any ) => state.auth
const authSelector = createSelector(auth, auth => {console.log(auth); return auth});


export const userSelector:any = createSelector(
  [authSelector],
  auth => auth.isLoggedIn,
);
export const accountInfoSelector:any = createSelector(
  [authSelector],
  auth => auth.accountInfo,
);
export const errorSelector:any = createSelector(
  [authSelector],
  auth => auth.isError,
);
export const messageSelector:any = createSelector(
  [authSelector],
  auth => auth.message,
);

