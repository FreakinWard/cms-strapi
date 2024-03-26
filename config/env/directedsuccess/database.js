module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'empty-host'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME_DIRECTEDSUCCESS', 'empty-database'),
      user: env('DATABASE_USERNAME', 'empty-username'),
      password: env('DATABASE_PASSWORD', 'empty-password'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

// const path = require('path');
//
// module.exports = ({ env }) => {
//
//   const filename = path.join(__dirname, '..', env('DATABASE_FILENAME_DIRECTEDSUCCESS', '.tmp/data-directedsuccess.db'));
//
//   console.log('test', { filename })
//
//   return {
//     connection: {
//       client: 'sqlite',
//       connection: {
//         // filename: path.join(__dirname, '..', env('DATABASE_FILENAME_DIRECTEDSUCCESS', '.tmp/data.db')),
//         filename,
//       },
//       useNullAsDefault: true,
//     },
//   }
// };
