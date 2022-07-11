var router = require('express').Router({ mergeParams: true });

var DeckCardController = require('#controllers/deck_card/index');

// QUERY
router.get('/', async function(req, res, next) {
  try {
    res.json(await DeckCardController.query(req));
  } catch (err) {
    next(err);
  }  
});

// CREATE
router.post('/', async function(req, res, next) {
  try {
    res.json(await DeckCardController.create(req));
  } catch (err) {
    next(err);
  }  
});

// READ
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await DeckCardController.read(req));
  } catch (err) {
    next(err);
  }  
});

// UPDATE
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await DeckCardController.update(req));
  } catch (err) {
    next(err);
  }  
});

// DELETE
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await DeckCardController.delete(req));
  } catch (err) {
    next(err);
  }  
});

module.exports = router;
