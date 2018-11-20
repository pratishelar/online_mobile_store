/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Cell Rox',
        content: 'Cell Rox was created to help people find a place to sit down and sell their phones.\n\nIf you are planning to establish a mobile presence for your business or organization one of the first considerations that will likely come to mind is whether you want to create a mobile application for users to download (app) or a mobile website, or perhaps both. Mobile websites and apps can look very similar at first-glance, and determining which is most suited to your needs will depend upon a number of factors, including target audiences, available budget, intended purpose and required features.'
    });
};


module.exports.privacy = function(req, res) {
    res.render('generic-text', {
        title: 'Privacy',
        content: 'This privacy notice discloses the privacy practices for (website address). This privacy notice applies solely to information collected by this website. It will notify you of the followingWhat personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.What choices are available to you regarding the use of your data.The security procedures in place to protect the misuse of your information.How you can correct any inaccuracies in the information.Information Collection, Use, and Sharing We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.Your Access to and Control Over Information You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:See what data we have about you, if any.Change/correct any data we have about you.Have us delete any data we have about you.Express any concern you have about our use of your data.'
    });
};