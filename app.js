import Fastify from "fastify";

import config from "./plugins/config.js";
import auth from "./plugins/auth.js";
import healthcheck from "./plugins/healthcheck.js";
import indexRoutes from "./routes/index.js";

export default async function appFramework() {
  const fastify = Fastify({ logger: true });
  fastify.register(config);
  fastify.register(auth);
  fastify.register(healthcheck);
  fastify.register(indexRoutes);

  await fastify.ready();

  return fastify;
}
