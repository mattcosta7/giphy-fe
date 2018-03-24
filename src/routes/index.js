import React from 'react';
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
          loader: () => Promise.resolve(() => <div> Home Page </div>),
        }),
      },
    ],
  },
];
