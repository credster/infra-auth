import fp from "fastify-plugin";

async function routesHealth(server, options) {
  server.get("/healthcheck", async (request, reply) => {
    return { status: true };
  });
}

export default fp(routesHealth);
