angular.module("myApp")
    .controller("SecondsController",function($scope){

        $scope.$watch('timer.data.invalid+timer.data.finished+timer.data.counter+timer.data.timestamp', function () {
            if($scope.timer.data.invalid || $scope.timer.data.finished){
                $scope.seconds = "none";
            }
            else{
                var newtime = $scope.resolveTime($scope.timer.data);
                $scope.seconds = Math.round(newtime/1000);
            }
        });
    });
