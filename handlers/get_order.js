/* reads db for orders */

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getOrder(orderId) {
  if (typeof orderId === 'undefined') {
    return docClient.scan({
      TableName: 'customer-orders'
    }).promise().then( result => result.Items )
  }

  return docClient.get({
    TableName: 'customer-orders',
    Key: {
      orderId: orderId
    }
  }).promise().then( result => result.Item )
}

function getOrders() {
  return docClient.scan({
    TableName: 'customer-orders'
  }).promise().then( result => result.Items )
}

module.exports = { getOrder, getOrders }