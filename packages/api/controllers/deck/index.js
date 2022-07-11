var DeckService = require('#services/deck/index');
var ControllerWrapper = require('#controllers/wrapper');

module.exports = ControllerWrapper(DeckService);
