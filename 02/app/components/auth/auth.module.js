angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {
    
    var config = {
      apiKey: "AIzaSyCsNISt3dFx7dy5AImIIk62jDDd0OLvZK0",
      authDomain: "contacts-manager-e486f.firebaseapp.com",
      databaseURL: "https://contacts-manager-e486f.firebaseio.com",
      storageBucket: "contacts-manager-e486f.appspot.com",
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

    firebase.initializeApp(config);
  });
