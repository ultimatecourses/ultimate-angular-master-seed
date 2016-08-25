function ContactsController() {
  var ctrl = this;
  ctrl.goToContact = function (event) {
    // $state.go('contact', { id: event.contactId })
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);
