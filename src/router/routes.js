import { translation } from "@/plugins/translation";
import Home from "@/views/Home.vue";
import NotFound from "@/views/404.vue";

function load(component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);
}

export default [
  {
    path: "",
    redirect(to) {
      return translation.getUserSupportedLang();
    }
  },
  {
    path: "/:lang",
    component: {
      template: "<router-view></router-view>"
    },
    beforeEnter: translation.routeMiddleware,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      },
      {
        path: "about",
        name: "about",
        component: load("About")
      }
    ]
  },
  {
    // Redirect user to supported lang version.
    path: "*",
    name: "404",
    component: NotFound
  }
];
