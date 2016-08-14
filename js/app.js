var app = angular.module('app', []);



app.controller('quoteCtrl', function($scope, $http, $sce) {

	

    $scope.newQuote = function() {
        
        $http({
            method: 'JSONP',
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            params: {
                _jsonp: 'JSON_CALLBACK'
            }
        }).then(function (response) {
            $scope.quoteInfo = {
                text: $sce.trustAsHtml(response.data[0].content),
                source: $sce.trustAsHtml(response.data[0].title)
            };

         });
    }

	 

     $http({
        method: 'JSONP',
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        params: {
            _jsonp: 'JSON_CALLBACK'
        }
    }).then(function (response) {
        $scope.quoteInfo = {
            text: $sce.trustAsHtml(response.data[0].content),
            source: $sce.trustAsHtml(response.data[0].title)
        };

        
    });
});