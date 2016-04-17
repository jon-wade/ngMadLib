
angular.module('myApp', [])
    .controller('myCtrl', function($scope){
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

        $scope.submit = function(){
            console.log($scope.inputForm);
            if($scope.inputForm.$invalid){
                $scope.error=true;
            }
            else {
                $scope.show=true;
            }
        }

        $scope.startOver = function(){
            $scope.show=false;
            $scope.name='';
            $scope.tediousTask='';
            $scope.dirtyTask='';
            $scope.celebrity='';
            $scope.uselessTask='';
            $scope.obnoxiousCelebrity='';
            $scope.hugeNumber='';
            $scope.adjective='';
            $scope.jobTitle='';
        }

    });

