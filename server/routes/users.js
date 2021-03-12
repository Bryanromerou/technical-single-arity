const router = require("express").Router();
const controllers = require('../controllers');

router.get('/',controllers.usersCtrl.index);

module.exports = router;