module.exports = ({ env }) => ({
  host: env('HOST_DEV', '0.0.0.0'),
  port: env.int('HOST_PORT_DEVELOPMENT', 5000),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});