var module = angular.module('ngRainbowDemo', ['ngRainbow']);
module.controller('demoController', ['$scope', 'rainbowBar', function($scope, rainbowBar) {
    "use strict";
    $scope.showBar = function() {
        rainbowBar.show();
    };

    $scope.hideBar = function() {
        rainbowBar.hide();
    };
}]);