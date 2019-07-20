const Knex = require('knex')

const {
  VONIC_POSTGRES_DATABASE,
  VONIC_POSTGRES_HOST,
  VONIC_POSTGRES_PASSWORD,
  VONIC_POSTGRES_PORT,
  VONIC_POSTGRES_CONNECTION_LIMIT,
  VONIC_POSTGRES_USERNAME,
  VONIC_POSTGRES_SSL,
} = process.env

const knex = Knex({
  client: 'postgresql',
  connection: {
    host : VONIC_POSTGRES_HOST,
    user : VONIC_POSTGRES_USERNAME,
    password : VONIC_POSTGRES_PASSWORD,
    database : VONIC_POSTGRES_DATABASE,
    port: Number(VONIC_POSTGRES_PORT),
    ssl: VONIC_POSTGRES_SSL === 'true',
  },
  pool: {
    min: 0,
    max: Number(VONIC_POSTGRES_CONNECTION_LIMIT),
  },
})

module.exports = { knex }
