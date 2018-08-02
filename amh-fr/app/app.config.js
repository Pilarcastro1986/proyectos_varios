'use strict';

angular.module('hotelConfig', [])
.constant('hotelConfig', (function() {
  let url = "http://localhost";
  let port = 3000;
  let apiBasePath = '/api';

  return {
    getHotelApiPath: function() {
      return url + (port ? ':' + port : '') + apiBasePath;
    },
    paths: {
      hotels: '/hotels'
    }
  };
})());
