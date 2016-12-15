(function () {
    'use strict';

    angular
        .module('boxApp')
        .directive('arrowAppend',function(){
          return function( scope, elem ) {
            elem.bind('keydown', function( event ) {
              var code=event.keyCode;
              if($('#'+scope.x).hasClass("new-color")){
              $('#'+scope.x).removeClass("new-color")
              }
              else {
              $('#'+scope.x).addClass("new-color")
              }
              scope.x= parseInt(scope.x);
              switch(code){
                case 37 : {
                  scope.flag="left";
                  if(scope.x===1||scope.x===6||scope.x===11){
                    scope.x=scope.x;
                  }
                  else{
                    scope.x=scope.x-1
                  }
                  break;
                }
                case 38 :{
                  scope.flag="up";
                  if(scope.x===1 ||scope.x===2 || scope.x===3 ||scope.x=== 4||scope.x===5){
                    scope.x=scope.x;
                  }
                  else{
                    scope.x=scope.x-5
                  }
                  break;
                }
                case 39 :{
                  scope.flag="right";
                  if(scope.x===5||scope.x===10||scope.x===15){
                    scope.x=scope.x;
                  }
                  else{
                    scope.x=scope.x+1
                  }
                  break;
                }
                case 40 : {
                  scope.flag="down";
                  if(scope.x===11||scope.x===12||scope.x===13||scope.x===14||scope.x===15){
                    scope.x=scope.x;
                  }
                  else{
                    scope.x=scope.x+5
                  }
                  break;
                }
              }
              scope.x.toString();
              scope.result = scope.result + scope.flag + "---> ";
              scope.$apply();
              $('#'+scope.x).addClass("new-color");
            });

          };
            });
})();
