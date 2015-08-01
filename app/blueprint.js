angular.module("Blueprint", [

]).controller("ServerCtrl", function($scope){
  $scope.servers = [
    { "id" : 1, "name" : "apple", "description": "Monitoring server", "location" : "Jakarta" },
    { "id" : 2, "name" : "banana", "description": "Utility server", "location" : "Jakarta" },
    { "id" : 3, "name" : "cherry", "description": "Apps 1", "location" : "Bandung" },
    { "id" : 4, "name" : "date", "description": "Apps 2", "location" : "Bandung" }
  ];

  $scope.locations = [ "Jakarta", "Bandung" ];

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
  };

  $scope.hideForm = function(){
    $scope.isCreating = false;
    $scope.isEditing = false;
  };

  $scope.initAddServerForm = function(){
    $scope.newServer = { "id": $scope.servers.length, "name" : "", "description": "", "location" : "MidPlaza"};
    $scope.isCreating = true;
    $scope.isEditing = false;
  };

  $scope.initEditServerForm = function(server){
    $scope.modifiedServer = angular.copy(server);
    $scope.isEditing = true;
    $scope.isCreating = false;
  };

  $scope.addServer = function(newServer){
    $scope.servers.push(newServer);
    $scope.hideForm();
  };

  $scope.editServer = function(modifiedServer){
    console.log("servers: " + $scope.servers);
    for(index in $scope.servers){
      if(modifiedServer["id"] === $scope.servers[index]["id"]){
        $scope.servers[index] = modifiedServer;
      }
    }
    $scope.hideForm();
  };
});
