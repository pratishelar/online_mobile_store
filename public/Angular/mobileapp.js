var MobileListCtrl = function ($scope, mobileData) {
    $scope.message = "Searching for mobiles";
    mobileData
        .success(function (data) {
            $scope.message = data.length > 0 ? "" : "No mobiles found";
            $scope.data = {
                mobiles: data
            };
        })
        .error(function (e) {
            $scope.message = "Sorry, something's gone wrong ";
        });
};


var mobileData = function ($http) {
    return $http.get('/api/mobiles');
};

angular.module('mobileapp', [])
    .controller('MobileListCtrl', MobileListCtrl)
    .service('mobileData', mobileData);
