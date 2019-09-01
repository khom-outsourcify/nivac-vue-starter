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
        component: Home,
        meta: {
          next: {
            name: "about"
          }
        }
      },
      {
        path: "about",
        name: "about",
        component: load("About"),
        meta: {
          prev: {
            name: "home"
          },
          next: {
            name: "games",
            params: {
              game: "memory"
            }
          }
        }
      },
      {
        path: "games/:game",
        name: "games",
        component: load("Games")
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
