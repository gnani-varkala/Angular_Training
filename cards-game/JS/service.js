(function () {
    'use strict';

    angular
        .module('cardGameApp')
        .service('cardService', cardService);

    cardService.$inject = [];
    function cardService(){
      this.myCard = function(arrayNumber,array){
        var cardNumber ="";
        var firststring = "";
        var secondstring = "";
        for(var iCtr =0;iCtr<array.length;iCtr++){
          if(arrayNumber == array[iCtr] ){
            cardNumber = iCtr;
          }
        }
        for(var i=array.length-1;i>=(cardNumber);i--){
          firststring+=array[i];
        }
		for(var i=(cardNumber-1);i>=0;i--){
          secondstring +=array[i];
        }
		firststring=secondstring +firststring;
           array = firststring.split("");
           console.log(array);
           return array;
      }
    }

})();
