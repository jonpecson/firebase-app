/*global Firebase*/
'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
  .controller('MainCtrl', function ($scope,$timeout) { 	
  	
  	var rootRef = new Firebase('https://sizzling-fire-6312.firebaseio.com/');
    var childRef = rootRef.child('message');

    // Calls when firebase is modified 
    childRef.on('value', function(snapshot) {
      // Prioritize the thread
      $timeout(function() {
        snapshot.forEach(function(item) {
          console.log(item.name() + ' - ' + item.val());
          console.log(item.ref())
        });
        
        $scope.message = snapshot.val();
      });
      
    });

    $scope.$watch('message.text', function(newVal) {
        if (!newVal) {
          return;
        }
        childRef.update({
          text : newVal
        });
    });


    //https://sizzling-fire-6312.firebaseio.com/message

    $scope.setMessage = function() {
      childRef.set({
        user : 'Bob',
        text : 'Hi'
      })

    };

    $scope.updateMessage = function() {
      childRef.update({
        text: 'Bye'
      })
    };

    $scope.deleteMessage = function() {
      childRef.remove();
    };

  });
