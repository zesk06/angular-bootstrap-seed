var myApp = angular.module('hello', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  // An array of state definitions
  var states = [
    { name: 'hello', url: '/hello', component: 'hello'},
    { name: 'about', url: '/about', component: 'about'},

    {
      name: 'people',
      url: '/people',
      component: 'people',
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },

    {
      name: 'people.person',
      // url is relative to /people root
      url: '/{personId}',
      component: 'person',
      resolve: {
        person: function(people, $stateParams) {
          return people.find(function(person) {
            return person.id === $stateParams.personId;
          });
        }
      }
    }
  ];

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });

  // route to /hello by default
  $urlRouterProvider.otherwise('/hello')
});

