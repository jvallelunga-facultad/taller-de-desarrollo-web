var express = require('express');
var router = express.Router();

var CardController = require('#controllers/card/index');

router.get('/', async function(req, res, next) {
  try {
    res.json(await CardController.query(req));
  } catch (err) {
    next(err);
  } 
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await CardController.read(req));
  } catch (err) {
    next(err);
  } 
});


module.exports = router;


