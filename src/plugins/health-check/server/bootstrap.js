'use strict';

module.exports = ({ strapi }) => {
  const healthMetrics = [
    {name: 'App Name', value: 'cms-strapi'},
    {name: 'Version', value: '0.1.0'},
    {name: 'Build Number', value: process.env.CI_BUILD_NUMBER},
  ]

  const routes = [
    {
      method: 'GET',
      path: `/health`,
      handler: (ctx) =>{
        ctx.body = { "status": "ok", "message": "All engines running 🚀", healthMetrics }
      }
    }
  ];

  routes.forEach(route => {
    route.info = { pluginName: 'health-check' };
    route.config = {
      auth: false
    };
  });

  strapi.server.routes({
    type: 'admin',
    routes
  });
};
