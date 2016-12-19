(function(){
  'use strict';
  angular.module('cardGameApp',[]);
})();

(function () {
    'use strict';

    angular
        .module('cardGameApp')
        .controller('cardGame', cardGame);

    cardGame.$inject = ['$scope','cardService'];
    function cardGame($scope,cardService){
      var numberArray = [1,2,3,4,5,6,7,8,9];
      $scope.mainArray =numberArray;
      $scope.numberArray = numberArray;
      $scope.items = [];
      $scope.selectCard = function(cardNumber){
        $scope.numberArray = cardService.myCard(cardNumber,numberArray);

      }


      $scope.handleDragStart = function(e){
		      e.diabled = false;
          e.dataTransfer.setData('text/plain', this.innerHTML);
      };


      $scope.handleDrop = function(e){
  		  var flag=false;
        e.preventDefault();
        e.stopPropagation();
        var dataText = e.dataTransfer.getData('text/plain');
        $scope.$apply(function() {
    			for(var i=0;i<$scope.items.length;i++){
    				if($scope.items[i] == $(dataText).text()){
    					flag=true;
    				}
    			}
    			if(flag == false){
    				$scope.items.push($(dataText).text());
    				  for(var i=0;i<numberArray.length;i++){
      					if($scope.items[$scope.items.length-1].trim() ==numberArray[i] ){
      					  numberArray.splice(i,1);
      					}
              }
    			}
        });
      };

      $scope.handleDragOver = function (e) {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          return false;
        };
    };
})();
