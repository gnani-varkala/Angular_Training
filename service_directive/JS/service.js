(function () {
    'use strict';

    angular
        .module('angular_app')
        .service('jsonService', jsonService);

    jsonService.$inject = ['$http'];
    function jsonService($http){
      this.myJson = function(url,callBack){
         $http.get(url).then(function success(response){
          callBack(response.data);
          },function error(){
            alert(status);
        });
      }
    }

})();
