var express = require('express');
var router = express.Router();

var CardService = require('#services/card/index');

router.get('/', async function(req, res, next) {
  try {
    res.json(await CardService.find());
  } catch (err) {
    next(err);
  } 
});


module.exports = router;


