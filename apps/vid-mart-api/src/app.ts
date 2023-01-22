import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox"
import {fastify} from "fastify"
import { storeRoutes } from "./stores/routes.js"
export const app = fastify().withTypeProvider<TypeBoxTypeProvider>()


app.get("/", (request, reply) => {
    reply.send("Hello World")
})

await app.register(storeRoutes)


