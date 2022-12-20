import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const data = {
  props: {
    test: "Testando as props",
  },
};

const routes = constructRoutes(microfrontendLayout, data as any);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
console.log({ applications });
applications.forEach(registerApplication);
layoutEngine.activate();
start();
