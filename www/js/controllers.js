angular.module('shoppingApp.controllers', ['shoppingApp.services'])

  .controller('ShoppingListCtrl', function($scope, Products) {
    $scope.products = Products.getAddedProducts();
  })
  .controller('AddItemCtrl', function($scope, Categories, Products) {
      $scope.queryText = {val: ''};
      $scope.display = false;
      $scope.products = null;
      Categories.fetch().then(function (categories) {
        $scope.categories = categories;
      });
      $scope.$watch('queryText.val', function () {
        if($scope.queryText.val === '' && !$scope.display) {
          $scope.products = null
        }
      });
      $scope.search = function () {
        if($scope.queryText.val !== ''){
          $scope.display = true;
          Products.fetch($scope.queryText.val).then(function(products){
            $scope.display = false;
            $scope.products = products;
          });
        }

      };
      $scope.attach = function (category) {
        $scope.queryText.val= category;
        $scope.display = true;
        Products.fetch(category).then(function(products){
          $scope.products = products;
          $scope.display = false;
        });
      };
      $scope.addItem = function (index, product) {
        Products.addProduct(product);
        $scope.products.splice(index,1);
      }
  })
  .controller('ExpensesCtrl', function($scope, Products) {
    $scope.products = Products.getAddedProducts();
  });


