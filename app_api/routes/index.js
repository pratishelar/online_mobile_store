var express = require('express');
var router = express.Router();
var ctrlMobiles = require('../controllers/mobiles');


router.get('/mobiles', ctrlMobiles.mobileList);
router.post('/mobiles', ctrlMobiles.createMobile);
router.get('/mobiles/:mobileid', ctrlMobiles.mobileReadone);
router.delete('/mobileDel/:mobileid', ctrlMobiles.mobileDeleteone);


module.exports = router;
