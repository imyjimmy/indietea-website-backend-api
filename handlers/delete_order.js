/*

*/

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function deleteOrder(orderId) {
  if (!orderId) {
    throw new Error('can\'t delete order because no orderID')
  }

  // return `deleted order ${orderID}`

  return docClient.delete({
    TableName: 'customer-orders',
    Key: {
      orderId: orderId
    }
  }).promise().then((result) => {
    console.log(`Order is deleted: ${result}`)
    return result
  })
  .catch((deleteError) => {
    console.log(`Error deleting the order: ${deleteError}`)
    throw deleteError
  })
}

module.exports = deleteOrder