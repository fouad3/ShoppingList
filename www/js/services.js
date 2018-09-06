angular.module('shoppingApp.services', [])

  .factory('Categories', function($http) {
    return {
      fetch: function() {
        return $http.get('https://www.bringmeister.de/api/categories')
          .then(function(response) {
               return response.data['categories'];
          });
      }
    };
  })
  .factory('Products', function($http) {
    var AddedProducts = [];
    return {
      fetch: function (category) {
        return $http.get(' https://www.bringmeister.de/api/products?limit=30&offset=0&q=' + category)
          .then(function (response) {
            return response.data['products'];
          });

      },
      addProduct: function (product) {
        AddedProducts.push(product);
      },
      getAddedProducts: function () {
        return AddedProducts;
      }
    }
  });
