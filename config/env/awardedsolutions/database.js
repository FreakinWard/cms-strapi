// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'empty-host'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME_AWARDEDSOLUTIONS', 'empty-database'),
//       user: env('DATABASE_USERNAME', 'empty-username'),
//       password: env('DATABASE_PASSWORD', 'empty-password'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME_AWARDEDSOLUTIONS', '.tmp/data-awardedsolutions.db')),
    },
    useNullAsDefault: true,
  },
});
