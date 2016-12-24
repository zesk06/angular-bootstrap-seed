angular.module('hello').component('people', {
  bindings: { people: '<' },
  templateUrl: 'components/people/people.template.html',
});
