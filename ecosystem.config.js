module.exports = {
  apps: [
    // {
    //   name: 'development',
    //   cwd: '/Users/aaronward/dev/freakinward/cms-strapi',
    //   script: 'npm',
    //   args: 'start',
    //   env: {
    //     NODE_ENV: 'development',
    //     HOST_PORT_SITE1: 5100,
    //     DOMAIN_URL: 'dev.awardedsolutions.com'
    //   }
    // },
    {
      name: 'directedsuccess',
      cwd: '/Users/aaronward/dev/freakinward/cms-strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'directedsuccess',
        HOST_PORT_SITE1: 5200,
        DOMAIN_URL: 'cms.directedsuccess.com'
      }
    },
    // {
    //   name: 'awardedsolutions',
    //   cwd: '/Users/aaronward/dev/freakinward/cms-strapi',
    //   script: 'npm',
    //   args: 'start',
    //   env: {
    //     NODE_ENV: 'awardedsolutions',
    //     HOST_PORT_SITE1: 5300,
    //     DOMAIN_URL: 'cms.awardedsolutions.com'
    //   }
    // },
  ]
};
