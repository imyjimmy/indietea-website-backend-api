/* creates an order */

function createOrder(order) {
  if (!order || !order.id || !order.address) {
    throw new Error("Please provide a tea id and/or an address.")
  }

  return {}
}

module.exports = createOrder