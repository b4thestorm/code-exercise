const path = require('path');

const migrationsDirPath = path.join(__dirname, './migrations');

module.exports = {
  development: {
    client: 'pg',
    asyncStackTraces: true,
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      port: 5432,
      password: 'secret',
      database: 'todos',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: '/Users/arnoldsanders/desktop/code-exercise/src/backend/repository/migrations',
    },
  },

  // test: {
  //   client: 'pg',
  //   asyncStackTraces: true,
  //   connection: process.env.DATABASE_URL || {
  //     host: '127.0.0.1',
  //     user: 'postgres',
  //     password: 'secret',
  //     database: 'postgres',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   acquireConnectionTimeout: 10000,
  //   migrations: {
  //     directory: migrationsDirPath,
  //   },
  // },
};
