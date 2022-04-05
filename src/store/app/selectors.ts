import { createSelector } from '@reduxjs/toolkit';

const app = ( state: any ) => state.app
const appSelector = createSelector(app, app => app);

export const sideBarSelector:any = createSelector(
  [appSelector],
  app => app.isOpenSidebar
);

export const alertSelector:any = createSelector(
  [appSelector],
  app => app.alert
);

export const breadcrumdSelector:any = createSelector(
  [appSelector],
  app => app.breadcrumd
);

