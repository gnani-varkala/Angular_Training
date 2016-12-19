(function () {
    'use strict';

    angular
        .module('cardGameApp')
        .directive('draggable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragstart', scope.handleDragStart, false);

    }
  }
});
})();


(function () {
    'use strict';

    angular
        .module('cardGameApp')
        .directive('droppable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('drop', scope.handleDrop, false);
      element[0].addEventListener('dragover', scope.handleDragOver, false);
    }
  }
});
})();
