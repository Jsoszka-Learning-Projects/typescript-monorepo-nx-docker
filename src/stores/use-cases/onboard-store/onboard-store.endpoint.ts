
import fp from "fastify-plugin";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { onboardStore } from "./onboard-store.js";
import { Address } from "../../../core/models/address.js";

export const onboardStoreEndpoint = fp(async (app) => {
  const schema = {
    body: Type.Object({
      address: Address,
    }),
  };

  app
    .withTypeProvider<TypeBoxTypeProvider>()
    .post("/stores", { schema }, (request, reply) => {
      const { address } = request.body;
      onboardStore(address);
      reply.send("Success")
    });
});
