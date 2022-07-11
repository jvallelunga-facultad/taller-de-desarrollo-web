var UserCardService = require('#services/user_card/index');
var ControllerWrapper = require('#controllers/wrapper');

module.exports = ControllerWrapper(UserCardService);
