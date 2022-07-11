var DeckCard = require('#models/DeckCard');
var ServiceWrapper = require('#services/wrapper');

module.exports = ServiceWrapper(DeckCard, { queryPopulate: ['card'], readPopulate: ['card'] });
