var express = require('express');
var router = express.Router();
var ctrlMobiles = require('../controllers/mobiles');
var ctrlOthers = require('../controllers/others');

router.get('/', ctrlMobiles.mobilelist);
router.get('/sell', ctrlMobiles.sell);
router.post('/sell', ctrlMobiles.sellpost);
router.get('/mobileinfo/:mobileid', ctrlMobiles.mobileinfo);
router.get('/mobiledelete/:mobileid', ctrlMobiles.mobiledelete)


/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/privacy', ctrlOthers.privacy);

module.exports = router;
