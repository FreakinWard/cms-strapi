module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/health',
     handler: 'health.getHealthStatus',
     config: {
       auth: false,
       policies: [],
       middlewares: [],
     },
    },
  ],
};
