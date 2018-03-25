import App from '../containers/App';
import { generateAsyncRouteComponent } from '../helpers/rrv4Helpers';

export default [
  {
    component: App,
    path: parentRoute => `${parentRoute}/`,
    routes: [
      {
        path: parentRoute => `${parentRoute}/`,
        exact: true,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "Trending" */ '../containers/Trending'),
        }),
      },
      {
        path: parentRoute => `${parentRoute}/:term`,
        component: generateAsyncRouteComponent({
          loader: () => import(/* webpackChunkName: "Search" */ '../containers/Search'),
        }),
      },
    ],
  },
];
