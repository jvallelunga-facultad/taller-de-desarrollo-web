var CardService = require('#services/card/index');
var ControllerWrapper = require('#controllers/wrapper');

const Controller = ControllerWrapper(CardService);
module.exports = {
  query: Controller.query,
  read: Controller.read,
};
