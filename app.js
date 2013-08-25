var app = angular.module('ngRainbowDemo', ['ngRainbow']);
app.config(['rainbowBarProvider', function(rainbowBarProvider) {
    "use strict";
    rainbowBarProvider.configure({
        barThickness: 5
    });
}]);
app.controller('demoController', ['$scope', '$timeout','rainbowBar', function($scope, $timeout, rainbowBar) {
    "use strict";

    $scope.showBar = function() {
        rainbowBar.show();
    };

    $scope.hideBar = function() {
        rainbowBar.hide();
    };

    $('#content').hide();
    $scope.showBar();
    $timeout(function() {
        $scope.hideBar();
        $('#content').show();
    }, 600);

}]);