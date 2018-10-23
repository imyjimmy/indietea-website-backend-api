const teas = require('../data/teas.json')

function getTeas(teaID) {
  if (!teaID) {
    return teas
  }
  const tea = teas.find((tea) => tea.id == teaID )
  if (tea) {
    return tea
  }
  throw new Error('the tea you requested was not found')
}

module.exports = getTeas