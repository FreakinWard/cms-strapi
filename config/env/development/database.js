const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME_DEV', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
