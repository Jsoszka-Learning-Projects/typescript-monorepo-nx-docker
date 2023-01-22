import fp from "fastify-plugin"
import { storeRepository } from "../../data/stores.js"

export const listStoresEndpoint = fp(async app => {
    app.get("/stores", (request, reply) => {
        const stores = storeRepository.getAll()
        reply.send(stores)
    })
})