var db = null;
var app = angular.module('starter', ['ionic', 'ngCordova'])

app.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    db = window.openDatabase("placesAround.db", "1.0", "placesAround", -1);
    $cordovaSQLite.execute(db, 
    "CREATE TABLE IF NOT EXISTS usuario (" +
    "login string primary key, nome string, idade integer, sexo boolean, senha string)");
  });
})