const router = require("express").Router();
const controllers = require('../controllers');

router.get('/',controllers.usersCtrl.index);
router.get('/:id',controllers.usersCtrl.show);

module.exports = router;