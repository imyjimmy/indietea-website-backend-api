
function putOrder(orderID, order) {
  if (!orderID || !order) {
    throw new Error('need orderID or the updated order.')
  }
  return `updating order ${orderID}, new order is ${order}`
}

module.exports = putOrder