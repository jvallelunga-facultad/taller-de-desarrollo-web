var UserService = require('#services/user/index');

module.exports = {
  create: async function(req, res, next) {
    try {
      const resonse = UserService.create({ name: 'inserting ' + Date.now() });
      res.json(resonse);
    } catch (err) {
      next(err);
    }  
  },
};
