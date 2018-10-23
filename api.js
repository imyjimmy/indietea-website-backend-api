/*  Entry point for the API.
    Contains all the routes 
*/

'use strict'

const API = require('claudia-api-builder')
const api = new API()


const getTeas = require('./handlers/get_teas')
const baseResp = require('./handlers/get_base') // should it be called getBase?

//the function name takes on the name of the const that is declared when imported.
//eg. call baseResp(), even though in handlers/get_base the function name is getBase
api.get('/', () => { return baseResp()}) 

//before:
// api.get('/teas', () => {
//   return [
//     'Black', 'Dark', 'Oolong', 'Green', 'White', 'Puer', 'Yellow'
//   ]
// })
api.get('/teas/{id}', (request) => {
  return getTeas(request.pathParams.id)
}, {
  error: 404
})

api.get('/teas', () => {
  return getTeas()
})

const createOrder = require('./handlers/create_order')

api.post('/order', (request) => {
  return createOrder(request.body)
}, { 
  success: 201, 
  error: 400
})

module.exports = api