import fp from "fastify-plugin";
import { listStoresEndpoint } from "./use-cases/list-stores/list-stores.endpoint.js";
import { onboardStoreEndpoint } from "./use-cases/onboard-store/onboard-store.endpoint.js";

export const storeRoutes = fp(async (app) => {
  app.register(listStoresEndpoint);
  app.register(onboardStoreEndpoint);
});
