const { equal } = require('assert')
const { knex } = require('../db')
const { createUser, TABLE_NAME, createUserTable } = require('../create-user')

before(() => createUserTable())

beforeEach(async () => {
  await knex(TABLE_NAME).del()
})

it('Can create user', async () => {
  await createUser()
  const users = await knex(TABLE_NAME).select()
  equal(users.length, 1)
  equal(users[0].name, 'A_NONSENSE_NAME')
})

after(() => knex.destroy())
