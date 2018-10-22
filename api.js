'use strict'

const API = require('claudia-api-builder')
const api = new API()

api.get('/teas', () => {
  return [
    'Black', 'Dark', 'Oolong', 'Green', 'White', 'Puer', 'Yellow'
  ]
})

module.exports = api