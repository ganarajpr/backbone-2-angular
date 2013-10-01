angular.module("myApp",[])
    .constant("SPEED",1000)

    //This is the equivalent of apiChangeM
    .run(function($timeout,$rootScope,SPEED){
        function startTimer(){
            $timeout(function(){
                $rootScope.$broadcast("tick");
                startTimer();
            },SPEED);
        }
        startTimer();
    });
