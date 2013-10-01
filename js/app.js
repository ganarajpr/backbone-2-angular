angular.module("myApp",[])
    .constant("SPEED",1000)
    .config(function($interpolateProvider){
        $interpolateProvider.startSymbol("[{");
        $interpolateProvider.endSymbol("}]");
    });
