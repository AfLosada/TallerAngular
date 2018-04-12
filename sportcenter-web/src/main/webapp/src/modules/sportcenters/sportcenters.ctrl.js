(function (ng) {
    var mod = ng.module("sportcenterModule");
    mod.constant("sportcenterContext", "api/sportcenters");
    mod.controller('sportcenterCtrl', ['$scope', '$http', 'sportcenterContext',
        function ($scope, $http, sportcenterContext) {
            $http.get('data/sportcenters.json').then(function (response) {
                $scope.sportcentersRecords = response.data;
            });
        }
    ]);
}
)(window.angular);

