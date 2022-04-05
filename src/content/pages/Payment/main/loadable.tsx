import loadable from '../../../../components/Loadable';

export const Main = loadable(
  () => import('./mainContainers')
);
