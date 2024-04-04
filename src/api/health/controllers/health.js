'use strict';

/**
 * A set of functions called "actions" for `health`
 */

const packageJson = require('../../../../package.json');

const metrics = [
  {name: 'App Name', value: packageJson.name},
  {name: 'Version', value: packageJson.version},
  {name: 'Build Number', value: packageJson.buildNumber ?? 'not-set', url: packageJson.buildJobUrl ?? 'not-set'},
]
const health = { "status": "ok", "message": "All engines running 🚀", metrics }


module.exports = {
  getHealthStatus: async ctx => {

    try {
      ctx.body = health;
    } catch (err) {
      ctx.body = err;
    }
  }
};
