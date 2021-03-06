var router = require('express').Router({ mergeParams: true });

var UserController = require('#controllers/user/index');

router.use('/:owner/decks', require('./decks'));
router.use('/:owner/cards', require('./cards'));

// QUERY
router.get('/', async function(req, res, next) {
  try {
    res.json(await UserController.query(req));
  } catch (err) {
    next(err);
  }  
});

// CREATE
router.post('/', async function(req, res, next) {
  try {
    res.json(await UserController.create(req));
  } catch (err) {
    next(err);
  }  
});

// READ
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await UserController.read(req));
  } catch (err) {
    next(err);
  }  
});

// UPDATE
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await UserController.update(req));
  } catch (err) {
    next(err);
  }  
});

// DELETE
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await UserController.delete(req));
  } catch (err) {
    next(err);
  }  
});

module.exports = router;
