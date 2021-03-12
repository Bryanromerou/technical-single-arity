const router = require("express").Router();
const controllers = require('../controllers');

router.get('/',controllers.usersCtrl.index);
router.get('/:id',controllers.usersCtrl.show);
router.post('/',controllers.usersCtrl.create);
router.delete('/:id',controllers.usersCtrl.destroy);

module.exports = router;