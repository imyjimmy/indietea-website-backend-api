
function deleteOrder(orderID) {
  if (!orderID) {
    throw new Error('can\'t delete order because no orderID')
  }

  return `deleted order ${orderID}`
}

module.exports = deleteOrder