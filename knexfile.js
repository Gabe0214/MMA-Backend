// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URI,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: ':memory',
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory : './database/migrations'
    },
    seeds: {
      directory: './database/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URI,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};