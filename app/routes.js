angular.module("Blueprint").config(function($routeProvider){
  $routeProvider
    .when("/", {
      "templateUrl" : "templates/server/index.html",
      "controller" : "ServerCtrl"
    })
    .when("/server", {
      "templateUrl" : "templates/server/index.html",
      "controller" : "ServerCtrl"
    })
    .otherwise({
      "redirectTo": "/"
    });
});
