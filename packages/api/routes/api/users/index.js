var router = require('express').Router();

var UserController = require('#controllers/user/index');

router.post('/', UserController.create);

router.get('/', async function(req, res, next) {
  try {
    res.json(await UserService.find());
  } catch (err) {
    next(err);
  }  
});

module.exports = router;
