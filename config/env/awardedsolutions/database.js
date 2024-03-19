// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST_DIRECTED-SUCCESS', 'localhost'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME_DIRECTED-SUCCESS', 'directed-success'),
//       user: env('DATABASE_USERNAME_DIRECTED-SUCCESS', 'root'),
//       password: env('DATABASE_PASSWORD_DIRECTED-SUCCESS', 'root'),
//       ssl: env.bool('DATABASE_SSL_DIRECTED-SUCCESS', false),
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
