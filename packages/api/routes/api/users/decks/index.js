var router = require('express').Router({ mergeParams: true });

var DeckController = require('#controllers/deck/index');

router.use('/:deck/cards', require('./cards'));

// QUERY
router.get('/', async function(req, res, next) {
  try {
    res.json(await DeckController.query(req));
  } catch (err) {
    next(err);
  }  
});

// CREATE
router.post('/', async function(req, res, next) {
  try {
    res.json(await DeckController.create(req));
  } catch (err) {
    next(err);
  }  
});

// READ
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await DeckController.read(req));
  } catch (err) {
    next(err);
  }  
});

// UPDATE
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await DeckController.update(req));
  } catch (err) {
    next(err);
  }  
});

// DELETE
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await DeckController.delete(req));
  } catch (err) {
    next(err);
  }  
});

module.exports = router;
