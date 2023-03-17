import React from "react";
import { createDevApp } from "@backstage/dev-utils";
import {
  createPlugin,
  createRoutableExtension,
} from "@backstage/core-plugin-api";
import { rootRouteRef } from "../src/routes/RouteRefs";

const standalonePlugin = createPlugin({
  id: "standalone",
  routes: {
    root: rootRouteRef,
  },
});

const PluginPage = standalonePlugin.provide(
  createRoutableExtension({
    name: "PluginPage",
    component: async () => import("../src/routes").then((m) => m.Router),
    mountPoint: rootRouteRef,
  })
);

createDevApp()
  .registerPlugin(standalonePlugin)
  .addPage({
    element: <PluginPage />,
    title: "Home Page",
    path: "/home",
  })
  .render();
