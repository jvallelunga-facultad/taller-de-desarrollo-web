var UserService = require('#services/user/index');
var ControllerWrapper = require('#controllers/wrapper');

module.exports = ControllerWrapper(UserService);
