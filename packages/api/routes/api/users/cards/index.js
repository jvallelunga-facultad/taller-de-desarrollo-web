var router = require('express').Router({ mergeParams: true });

var UserCardController = require('#controllers/user_card/index');

// QUERY
router.get('/', async function(req, res, next) {
  try {
    console.log('api > users > cards ', JSON.stringify({ params: req.params, query: req.query }));
    res.json(await UserCardController.query(req));
  } catch (err) {
    next(err);
  }  
});

// CREATE
router.post('/', async function(req, res, next) {
  try {
    res.json(await UserCardController.create(req));
  } catch (err) {
    next(err);
  }  
});

// READ
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await UserCardController.read(req));
  } catch (err) {
    next(err);
  }  
});

// UPDATE
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await UserCardController.update(req));
  } catch (err) {
    next(err);
  }  
});

// DELETE
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await UserCardController.delete(req));
  } catch (err) {
    next(err);
  }  
});

module.exports = router;
