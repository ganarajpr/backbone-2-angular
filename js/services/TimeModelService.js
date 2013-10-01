/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 13:04
 * To change this template use File | Settings | File Templates.
 */

/*
* $(document).ready(function() {
 //Generally I have models/collections accessible in the global app namespace.
 $.tutorial.apiChange = new apiChangeM();
 $.tutorial.nowM = new ClockM();
 $.tutorial.timerDownM = new TimerM({counter:10000});
 $.tutorial.timerUpM = new TimerM({counter: 1000, countUp: true});
 });
* */

angular.module("myApp")
    .factory("TimeModelService",function(ClockModel,TimerModel){
        var tmService = {
            timers : []
        };
        var nowM = new ClockModel();
        var timerDownM = new TimerModel({counter:10000});
        var timerUpM = new TimerModel({counter: 1000, countUp: true});
        tmService.timers.push(nowM);
        tmService.timers.push(timerDownM);
        tmService.timers.push(timerUpM);
        return tmService;
    });