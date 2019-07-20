const { knex } = require('./db')

const TABLE_NAME = 'users'

async function createSampleTable() {
  const existed = await knex.schema.hasTable(TABLE_NAME)
  if (existed) return
  return knex.schema.createTable(TABLE_NAME, function (table) {
    table.increments();
    table.string('name');
  })
}

async function createUser() {
  await createSampleTable()
  await knex(TABLE_NAME).insert({ name: 'A_NONSENSE_NAME' })
}

module.exports = { createUser, TABLE_NAME }
