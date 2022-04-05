export const RouteConfigs= {
    authorization: {
      defaultRoute: '/',
      routes: ["/"],
    },
    unauthorization: {
      defaultRoute: ['/404'],
      routes: ['/404'],
    },
    authentication: {
      defaultRoute: '/login',
      routes: ['/login'],
    },
    maintenance: {
        defaultRoute: '/maintenance',
        routes: ['/maintenance'],
    },
  };