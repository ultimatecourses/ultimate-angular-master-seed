function ContactService(AuthService, $firebaseRef, $firebaseArray) {
  var ref = $firebaseRef.contacts;
  var uid = AuthService.getUser().uid;
  return {
    createNewContact: function (contact) {
      return $firebaseArray(ref.child(uid)).$add(contact);
    }
  };
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService);
