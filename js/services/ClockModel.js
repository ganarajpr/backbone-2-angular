/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 16:19
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .factory("ClockModel",function($timeout,SPEED,$rootScope,util){
        return function(options){
            var self = this;
            var deregister;
            this.data = {
                timestamp : util.utcNow(),
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
                if(self.data.invalid){
                    deregister();
                }
            };
            this.powerOut = function(){
                self.data.invalid = true;
            };
            deregister = $rootScope.$on("tick",this.tick);

        };
    });
