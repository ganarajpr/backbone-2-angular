/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 13:04
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .factory("TimeModelService",function(CounterModel){
        var tmService = {
            timers : []
        };
        tmService.timers.push(new CounterModel("up",true));
        tmService.timers.push(new CounterModel("up",false));
        tmService.timers.push(new CounterModel("down",false));
        return tmService;
    });