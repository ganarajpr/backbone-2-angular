/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 16:19
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .factory("ClockModel",function($timeout,SPEED,$rootScope){
        return function(options){
            var self = this;
            this.data = {
                timestamp : 0,
                speed : SPEED,
                invalid : false
            };
            if(options){
                angular.extend(this.data,options)
            }

            this.tick = function(){
                if(!self.data.invalid){
                    self.data.timestamp = self.data.timestamp + self.data.speed;
                }
            };
            this.powerOut = function(){
                this.data.invalid = true;
            };
            $rootScope.$on("tick",this.tick);

        };
    });