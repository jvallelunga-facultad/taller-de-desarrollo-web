var UserCard = require('#models/UserCard');
var ServiceWrapper = require('#services/wrapper');

module.exports = ServiceWrapper(UserCard, { queryPopulate: ['card'], readPopulate: ['card'] });
