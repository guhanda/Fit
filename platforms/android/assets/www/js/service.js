/*var handaService = handaApp.service('handaAppService', function(){
    this.isAuth= function(){
        return true;
    };        
});*/


var handaService = angular.module('handa.app.services', []);

handaService.service('handaService1', function(){
    this.isAuth= function(){
        return true;
    };        
});

handaService.service('handaService2', function(){
    this.isAuth= function(){
        return false;
    };      

    this.status = function(){
    	return "Ok";
    }  
});