import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router';
import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from 'src/layouts/BaseLayout';
import TabbarLayout from 'src/layouts/TabbarLayout';

const Loader = (Component: any) => (props: any) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

//Auth
const Login = Loader(lazy(() => import('src/content/pages/Login')));

// Pages
const Payment = Loader(lazy(() => import('src/content/pages/Payment')));

// Status
const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));
const Status500 = Loader(lazy(() => import('src/content/pages/Status/Status500')));
const StatusComingSoon = Loader(lazy(() => import('src/content/pages/Status/ComingSoon')));
const StatusMaintenance = Loader(lazy(() => import('src/content/pages/Status/Maintenance')));

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '404',
        element: <Status404 />
      },
      {
        path: '500',
        element: <Status500 />
      },
      {
        path: 'maintenance',
        element: <StatusMaintenance />
      },
      {
        path: 'coming-soon',
        element: <StatusComingSoon />
      },
      {
        path: '',
        element: <Navigate to={"/payment"} />
      },
    ]
  },

  {
    path: 'login',
    element: (
      <BaseLayout />
    ),
    children: [
      {
        path: '',
        element: <Login />
      }
    ]
  },
  {
    path: '',
    element: (
      <TabbarLayout />
    ),
    children: [
      {
        path: 'payment',
        element: <Payment />
      },
    ]
  },
];

export default routes;
