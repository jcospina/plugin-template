import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import {
  rootRouteRef,
} from './routes/RouteRefs';


export const standalonePlugin = createPlugin({
  id: 'standalone',
  routes: {
    root: rootRouteRef
  },
});

export const PluginPage = standalonePlugin.provide(
  createRoutableExtension({
    name: 'PluginPage',
    component: async () => import('./routes').then(m => m.Router),
    mountPoint: rootRouteRef,
  }),
);
