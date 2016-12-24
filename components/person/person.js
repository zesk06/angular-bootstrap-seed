angular.module('hello').component('person', {
  bindings: { person: '<' },
  templateUrl: 'components/person/person.template.html',
});
