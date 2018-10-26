/*
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html
*/

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function putOrder(orderId, order) {
  if (!orderId || !order) {
    throw new Error('need orderID or the updated order.')
  }
  // return `updating order ${orderID}, new order is ${order}`

  return docClient.update({
    TableName: 'customer-orders',
    Key: {
      orderId: orderId
    },
    UpdateExpression: 'set tea=:t, address=:a', //eg: 'set #a = :x + :y',
    ExpressionAttributeValues: {
      ':t': order.tea,
      ':a': order.address
    },
    ReturnValues: 'ALL_NEW'
  }).promise().then((result) => {
    console.log('Order is updated!', result)
    return result.Attributes
  })
  .catch((updateError) => {
    console.log(`Oops, order is not updated: ${updateError}`)
    throw updateError
  })
}

module.exports = putOrder