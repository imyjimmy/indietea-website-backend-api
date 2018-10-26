/*  Entry point for the API.
    Contains all the routes 
*/

'use strict'

const API = require('claudia-api-builder')
const api = new API()


const getTeas = require('./handlers/get_teas')
const baseResp = require('./handlers/get_base') // should it be called getBase?
const createOrder = require('./handlers/create_order')
const modifyOrder = require('./handlers/put_order')
const deleteOrder = require('./handlers/delete_order')
const { getOrders, getOrder } = require('./handlers/get_order')


const server_resp = { success: 201, error: 400 }

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

api.get('/getOrder/{id}', (request) => {
  return getOrder(request.pathParams.id)
})

api.get('/getOrders', (request) => {
  return getOrders()
})

api.post('/order', (request) => {
  return createOrder(request.body)
}, server_resp)

api.put('/order/{id}', (request) => {
  return modifyOrder(request.pathParams.id, request.body)
}, server_resp)

api.delete('/order/{id}', (request) => {
  return deleteOrder(request.pathParams.id)
}, server_resp)

module.exports = api