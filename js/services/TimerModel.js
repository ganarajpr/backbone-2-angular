/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 16:19
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .factory("TimerModel",function($timeout,SPEED,$rootScope){
        return function(options){
            var self = this;
            var deregister;
            this.data = {
                counter : 0,
                countUp : false,
                speed : SPEED,
                finished : false,
                broken : false
            };
            if(options){
                angular.extend(this.data,options);
            }
            this.tick = function(){
                var direction = self.data.countUp ? 1 : -1;
                if(!self.data.finished && !self.data.invalid){
                    self.data.counter = self.data.counter + direction * self.data.speed;
                }
                self.checkFinished();
            };
            this.checkFinished = function(){
                if(this.data.counter < 0 ){
                    this.data.finished = true;
                    deregister();
                }
            };
            this.reverse = function(){
                self.data.countUp = !self.data.countUp;
            };
            deregister = $rootScope.$on("tick",this.tick);
        };
    });
