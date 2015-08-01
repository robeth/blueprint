angular.module("Atlas", [

]).controller("ServerCtrl", function($scope){
  $scope.servers = [
    { "id" : 1, "name" : "gw1", "description": "Server 1 di MidPlaza", "location" : "MidPlaza" },
    { "id" : 2, "name" : "gw2", "description": "Server 2 di MidPlaza", "location" : "MidPlaza" },
    { "id" : 3, "name" : "gw3", "description": "Server 3 di Technovillage", "location" : "Technovillage" },
    { "id" : 4, "name" : "gw4", "description": "Server 4 di Technovillage", "location" : "Technovillage" }
  ];

  $scope.locations = [ "Technovillage", "MidPlaza" ];

  $scope.currentLocation = null;

  $scope.isCreating = false;
  $scope.isEditing = false;

  $scope.setCurrentLocation = function(location){
    if($scope.currentLocation == location){
      $scope.currentLocation = null;
    } else {
      $scope.currentLocation = location;
    }
  };

  $scope.serverFilterByLocation = function(value, index, array){
    return $scope.currentLocation == null || $scope.currentLocation == value.location;
  }

});
