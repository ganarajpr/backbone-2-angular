angular.module("myApp")
    .controller("WinkyController",function($scope,$timeout){

        var speedOfWink = 900;
        $scope.semicolon = false;
        $scope.$watch('timer.data', function () {
            if($scope.timer.data.invalid || $scope.timer.data.finished){
                $scope.ten = 0;
            }
            else{
                $scope.ten = Math.floor($scope.resolveTime($scope.timer.data)/1000)%10;
            }
        },true);
        var toggleWink = function(){
            if(Math.random() > .6){
                $scope.semicolon = !$scope.semicolon;
            }
            $timeout(toggleWink,speedOfWink);
        };

        toggleWink();

    });
