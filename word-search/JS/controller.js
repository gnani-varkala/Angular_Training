(function(){
  'use strict';
  angular.module('wordSearchApp',[]);
})();

(function () {
    'use strict';

    angular
        .module('wordSearchApp')
        .controller('wordSearch', wordSearch);

    wordSearch.$inject = ['$scope',"$interval"];
    function wordSearch($scope,$interval){
      $scope.alphabetsArray = [["g","p","a","n","d","a"],["s","q","e","q","r","g"],["h","b","u","e","a","l"],
                    ["a","i","l","k","i","o"],["r","r","b","r","n","v"],["k","d","v","w","m","e"]];
      $scope.inputArray = ["blue","bird","rain","panda","glove","shark"];
      $scope.myDisable=false;
      $scope.timer = 30;
      var itemToSearch = [];
      var rowIndex;
      var colIndex;
      var secondRow;
      var secondCol;
      $scope.intial = true;
      $scope.count=0;
      $scope.element = function(event,col,index2,alphabet){
          var target = event.target.id ;
          if(itemToSearch.length == 0){
            itemToSearch.push({"alphabet":alphabet,"id":target});
            $('#'+target).addClass('new-color');
            rowIndex = col;
            colIndex = index2;
          }
          else if(itemToSearch.length == 1){
            //$scope.myDisable=true;
            if((col == (rowIndex-1)&&index2 == colIndex )||( col == (rowIndex+1)&&index2 == colIndex)||(col == rowIndex&&index2 == (colIndex-1))||(col == (rowIndex)&&index2 == (colIndex+1))||(col == (rowIndex-1)&&index2 == (colIndex-1))||
            (col == (rowIndex+1)&&index2 == (colIndex+1))||(col == (rowIndex-1)&&index2 == (colIndex+1))||
            (col == (rowIndex+1)&&index2 == (colIndex-1))){
                itemToSearch.push({"alphabet":alphabet,"id":target});
                $('#'+target).addClass('new-color');
                secondRow = col;
                secondCol = index2;
            }
          }
          else if(itemToSearch.length >=2 ){
            var flag=false;
            if(rowIndex-1 == (secondRow)&&secondCol == colIndex){
              if(col == (secondRow-1)&&index2 == secondCol ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if(rowIndex+1 == (secondRow)&&secondCol == colIndex){
              if(col == (secondRow+1)&&index2 == secondCol ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if((rowIndex == secondRow)&&(secondCol == colIndex-1)){
              if(col == (secondRow)&&index2 == secondCol-1 ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if((rowIndex == secondRow)&&(secondCol == colIndex+1)){
              if(col == (secondRow)&&index2 == secondCol+1 ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if((rowIndex-1 == secondRow)&&(secondCol == colIndex-1)){
              if(col == (secondRow-1)&&index2 == secondCol-1 ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if((rowIndex-1 == secondRow)&&(secondCol == colIndex+1)){
              if(col == (secondRow-1)&&index2 == secondCol+1 ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if((rowIndex+1 == secondRow)&&(secondCol == colIndex+1)){
              if(col == (secondRow+1)&&index2 == secondCol+1 ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if((rowIndex+1 == secondRow)&&(secondCol == colIndex-1)){
              if(col == (secondRow+1)&&index2 == secondCol-1 ){
              itemToSearch.push({"alphabet":alphabet,"id":target});
              $('#'+target).addClass('new-color');
              flag =true;
              }
            }
            if(flag){
              rowIndex = secondRow;
              colIndex = secondCol;
              secondRow = col;
              secondCol = index2;
            }
          }
          console.log(rowIndex +""+colIndex+""+secondRow+""+secondCol)
          console.log(itemToSearch);
      }
      $scope.submit=function(){
        var word="";
        var flag=false;
        for(var i=0;i<itemToSearch.length;i++){
          word +=itemToSearch[i].alphabet;
        }
        for(var i=0;i<$scope.inputArray.length;i++){
          if(word ==$scope.inputArray[i] ){
            flag = true;
          }
        }
        if(flag){
          $scope.count = $scope.count+1;
        }
        else{
          for(var i=0;i<itemToSearch.length;i++){
            $('#'+itemToSearch[i].id).removeClass('new-color');
          }
        }
        if($scope.inputArray.length == $scope.count){
          alert("Game completed successfiy; Your score:"+$scope.count);
          $(" .cell").removeClass("new-color");
          $scope.count = 0;
          $scope.timer =30;
        }
        itemToSearch = [];
      }
      $interval(function(){
        $scope.timer--;
        if($scope.timer ==0){
          $scope.count = 0;
          $(" .cell").removeClass("new-color");
          $scope.timer =30;
          alert("Game over");
        }
      },1000)
    };
})();
