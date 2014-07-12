
'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
  .controller('MainCtrl', function ($scope,$timeout, MessageService) { 	

    $scope.currentUser = null;
    $scope.currentText = null;
    $scope.messages = [];


    MessageService.childAdded(10, function(addedChild) {
      $timeout(function() {
        $scope.messages.push(addedChild);
      });
    });

    $scope.sendMessage = function() {
      var newMessage = {
        user : $scope.currentUser,
        text : $scope.currentText
      };
      // Save to firebase
      MessageService.add(newMessage);
    };

    $scope.turnFeedOff = function() {
      MessageService.off();
    };

  });
