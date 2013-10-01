/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 13:09
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .controller("TimerController",function($scope,TimeModelService){
        $scope.timers = TimeModelService.timers;
        $scope.resolveTime = function(obj){
            return obj.timestamp || obj.counter;
        };

        $scope.resolveButtonAction = function(obj){
            return obj.powerOut || obj.reverse || angular.noop;
        };
    });