var mongoose = require('mongoose');
var Mob = mongoose.model('Mobile');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

/* Mobiles  */

module.exports.mobileList = function (req, res) {
    if (req.params) {
        Mob
            .find(req.params)
            .exec(function (err, mobile) {
                if (!mobile) {
                    sendJsonResponse(res, 404, {
                        "message": "mobile not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, mobile);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No mobile in request"
        });
    }
};

module.exports.createMobile = function (req, res) {
    Mob.create({
        name: req.body.name,
        details: req.body.details,
        feature: req.body.feature,
        screentype: req.body.screentype,
        screensize: req.body.screensize,
        screenratio: req.body.screenratio
    }, function (err, mobile) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, mobile);
        }
    });
};

module.exports.mobileReadone = function (req, res) {
    if (req.params && req.params.mobileid) {
        Mob
            .findById(req.params.mobileid)
            .exec(function (err, mobile) {
                if (!mobile) {
                    sendJsonResponse(res, 404, {
                        "message": "mobileid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, mobile);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No mobileid in request"
        });
    }
};

module.exports.mobileDeleteone = function (req, res) {
    
    Mob.findByIdAndRemove(req.params.mobileid,function(err, obj){
        if(err){
            sendJsonResponse(res, 400, {
                        "message": "mobileid not found"
                    });
            
        }else{
            sendJsonResponse(res, 201, {
                        "message": "deleted successfully"
                    });
        }
    });
};
