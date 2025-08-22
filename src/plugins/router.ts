import { createRouter, createWebHistory } from "vue-router";

const modules = import.meta.glob("../views/**/*.vue");

const routes = Object.keys(modules).map((path) => {
  let routePath = path.replace("../views", "").replace(".vue", "");

  routePath = routePath.replace(/\/index$/, "") || "/";

  if (!routePath.startsWith("/")) routePath = "/" + routePath;

  const name = routePath
    .split("/")
    .filter(Boolean)
    .map((segment) => segment[0].toUpperCase() + segment.slice(1))
    .join("");

  return {
    path: routePath.toLowerCase(),
    name,
    component: modules[path],
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes, router };
