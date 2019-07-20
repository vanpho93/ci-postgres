const { knex } = require('./db')

const TABLE_NAME = 'users'

async function createUserTable() {
  const existed = await knex.schema.hasTable(TABLE_NAME)
  if (existed) return
  return knex.schema.createTable(TABLE_NAME, function (table) {
    table.increments();
    table.string('name');
  })
}

function createUser() {
  return knex(TABLE_NAME).insert({ name: 'A_NONSENSE_NAME' })
}

module.exports = { createUser, TABLE_NAME, createUserTable }
