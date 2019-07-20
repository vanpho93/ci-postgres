const { equal } = require('assert')
const { add } = require('../app')

it('Can add 2 nature numbers', () => {
  const result = add(1, 2)
  equal(result, 3)
})
