var router = require('express').Router();

// split up route handling
router.use('/cards', require('./cards'));
router.use('/users', require('./users'));

module.exports = router;