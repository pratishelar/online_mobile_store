var request = require('request');
var apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var renderHomepage = function (req, res) {
    res.render('mobile-list', {
        sidebar: "Looking for mobile this app helps you find a good mobile"
        
    });
};

/* GET 'home' page */
module.exports.mobilelist = function (req, res) {

    renderHomepage(req, res);
 
};

var renderDetailPage = function (req, res, mobdetails) {
    res.render('mobile-info', {
        pageHeader: {
            title: mobdetails.name
        },
        sidebar: {
            context: 'is in Cell Rox because it meets the requirements of our company.',
        },
        mobiles: mobdetails
    });
};

module.exports.mobileinfo = function (req, res) {
    var requestOptions, path;
    path = "/api/mobiles/" + req.params.mobileid;
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function (err, response, body) {
            renderDetailPage(req, res, body);
        }
    );
};


var renderReviewForm = function (req, res) {
    res.render('sellmobile-form', {
        title: 'Sell Mobile',
        pageHeader: {
            title: 'Start Selling'
        }
    });
};

/* GET 'sell mobile' page */
module.exports.sell = function (req, res) {
    renderReviewForm(req, res);
};


module.exports.sellpost = function (req, res) {
    var requestOptions, path, postdata;
    path = "/api/mobiles/";
    postdata = {
        name: req.body.name,
        details: req.body.details,
        feature: req.body.feature,
        screentype: req.body.screentype,
        screensize: req.body.screensize,
        screenratio: req.body.screenratio
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json: postdata
    };
    request(
        requestOptions,
        function (err, response, body) {
            if (response.statusCode === 201) {
                res.redirect('/sell');
            } else {
                _showError(req, res, response.statusCode);
            }
        }
    );
};

var afterdeleteform = function(req,res){
    res.render('message-success', {
        title: 'Hurray! You Sold the Item Successfully',
        content: 'If you want to sell more items Click on the Sell Tab on the top .Thank You for your interest'
    });
}

module.exports.mobiledelete = function(req,res){
    
    var requestOptions,path;
    path = "/api/mobileDel/" + req.params.mobileid;
    requestOptions = {
        url: apiOptions.server + path,
        method: "DELETE",
        json: {}
    };
    request(
        requestOptions,
        function (err, response,body) {
            if (response.statusCode === 201) {
                res.redirect('/');
                
            } else {
                res.send("not success");
            }   
        }
    );
};