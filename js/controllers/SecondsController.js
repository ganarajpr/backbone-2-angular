angular.module("myApp")
    .controller("SecondsController",function($scope){

        $scope.$watch('timer.data', function () {
            if($scope.timer.data.invalid || $scope.timer.data.finished){
                $scope.seconds = "none";
            }
            else{
                var newtime = $scope.resolveTime($scope.timer.data);
                $scope.seconds = Math.round(newtime/1000);
            }
        },true);
    });
