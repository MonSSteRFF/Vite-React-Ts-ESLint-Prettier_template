import { RouteObject } from 'react-router-dom';

import Home from '../Pages/Home';

const useRoutes = () => {
  const routes: { [key: string]: RouteObject } = {
    Home: {
      path: '/',
      element: <Home />,
    },
  };

  return {
    routes,
    pageNames: Object.keys(routes),
    pageNamesWithPath: Object.keys(routes).map((p) => ({
      path: routes[p].path,
      name: p,
    })),
    allInfoRoutes: Object.keys(routes).map((p) => ({
      path: routes[p].path,
      element: routes[p].element,
      name: p,
    })),
  };
};

export default useRoutes;
