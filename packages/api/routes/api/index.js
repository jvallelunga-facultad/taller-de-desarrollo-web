var router = require('express').Router();

// split up route handling
router.use('/cards', require('./cards'));
router.use('/users', require('./users'));
router.use('/decks', require('./decks'));

module.exports = router;