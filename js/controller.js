
angular.module('myApp', ['ngAnimate'])
    .controller('myCtrl', function($scope, $timeout){
        $scope.name='';
        $scope.tediousTask='';
        $scope.dirtyTask='';
        $scope.celebrity='';
        $scope.uselessTask='';
        $scope.obnoxiousCelebrity='';
        $scope.hugeNumber='';
        $scope.adjective='';
        $scope.jobTitle='';
        $scope.gender='male';

        $scope.hide = false;

        $scope.clickOne = function(){
            if ($scope.inputForm.$invalid){
                $scope.error = true;
            }
            else {
                $scope.hide = !$scope.hide;
            }
        };


        $scope.startOver = function(){
            $scope.hide=false;
            $scope.error=false;
            $timeout(function(){
                $scope.name='';
                $scope.tediousTask='';
                $scope.dirtyTask='';
                $scope.celebrity='';
                $scope.uselessTask='';
                $scope.obnoxiousCelebrity='';
                $scope.hugeNumber='';
                $scope.adjective='';
                $scope.jobTitle='';}, 2000);
        };

    });

