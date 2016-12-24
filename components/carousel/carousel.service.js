angular.module('hello').service('CarouselService', function($http) {
  var service = {
    getAllImages: function() {
      return $http.get('data/carousel.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    },
  };

  return service;
});
