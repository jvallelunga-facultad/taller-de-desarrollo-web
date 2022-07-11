var express = require('express');
var router = express.Router();

var DeckController = require('#controllers/deck/index');

router.get('/', async function(req, res, next) {
  try {
    res.json(await DeckController.query(req));
  } catch (err) {
    next(err);
  } 
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await DeckController.read(req));
  } catch (err) {
    next(err);
  } 
});


module.exports = router;


