angular.module("myApp")
    .controller("DigitalController",function($scope,util){

        $scope.$watch('timer.data', function () {
            if($scope.timer.data.invalid || $scope.timer.data.finished){
                $scope.displayTime = "00:00:00";
            }
            else{
                $scope.displayTime = util.formatHMS($scope.resolveTime($scope.timer.data));
            }
        },true);

        $scope.buttonPushed = function(){
            $scope.resolveButtonAction($scope.timer)();
        };
    });
