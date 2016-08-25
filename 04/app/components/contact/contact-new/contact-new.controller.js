function ContactNewController(ContactService) {
  var ctrl = this;
  ctrl.$onInit = function () {
    ctrl.contact = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      },
      tag: 'none'
    };
  };
  ctrl.createNewContact = function (event) {
    return ContactService
      .createNewContact(event.contact)
      .then(function (contact) {
        // success
        console.log(contact);
      });
  };
}

angular
  .module('components.contact')
  .controller('ContactNewController', ContactNewController);
