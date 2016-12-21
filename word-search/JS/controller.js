(function(){
  'use strict';
  angular.module('wordSearchApp',[]);
})();

(function () {
    'use strict';

    angular
        .module('wordSearchApp')
        .controller('wordSearch', wordSearch);

    wordSearch.$inject = ['$scope',"jsonService","$interval"];
    function wordSearch($scope,jsonService,$interval){
      $scope.alphabetsArray =[];
      $scope.inputArray=[];
      jsonService.myJson('JSON/level1.json').then(function(data){
        $scope.alphabetsArray = data.alphabetArray;
        $scope.inputArray =data.inputArray;
      });
      $scope.timer =0;
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
      }
      var timer = $interval(function(){
        $scope.timer +=1 ;
      },1000);
      $scope.submit=function(){
        var word="";
        var flag=false;
        var index="";
        for(var i=0;i<itemToSearch.length;i++){
          word +=itemToSearch[i].alphabet;
        }
        for(var i=0;i<$scope.inputArray.length;i++){
          if(word ==$scope.inputArray[i] ){
            index =i;
            $('#00'+index).addClass('new-color');
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
          $("#myModal").modal('show');
          $(" .cell").removeClass("new-color");
          $(" .inputClass").removeClass("new-color");
        }
        $("#myModal").on("hide.bs.modal", function () {
          $scope.count = 0;
          jsonService.myJson('JSON/level2.json').then(function(data){
            $scope.alphabetsArray = data.alphabetArray;
            $scope.inputArray =data.inputArray;
              });
            $scope.timer =0;
        });
        itemToSearch = [];
      }

    };
})();
