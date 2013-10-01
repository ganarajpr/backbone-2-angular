/**
 * Created with IntelliJ IDEA.
 * User: Ganaraj.Pr
 * Date: 01/10/13
 * Time: 12:50
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp")
    .factory("CounterModel",function($timeout,SPEED){
        return function(direction,now,counter){
            var self = this;
            if(counter){
                this.counter = counter;
            }
            else{
                this.counter = 0;
            }
            if(now){
                this.counter = new Date().valueOf();
            }
            this.direction = 1;
            if(direction === "down"){
                this.direction = -1;
            }

            $timeout(function(){
                self.counter = self.counter + self.direction;
            },SPEED);
        };
    });