/* creates an order */
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const uuid = require('uuid')

function createOrder(order) {
  if (!order || !order.tea || !order.address) {
    throw new Error("Please provide a tea and/or an address.")
  }

  return docClient.put({
    TableName: 'customer-orders',
    Item: {
      orderId: uuid(),
      tea: order.tea,
      address: order.address,
      orderStatus: 'pending'
    }
  }).promise().then((res) => {
    console.log('Order is saved!', res)
    return res
  })
  .catch((saveError) => {
    console.log(`Oops, order is not saved: ${saveError}`)
    throw saveError
  })
}

module.exports = createOrder