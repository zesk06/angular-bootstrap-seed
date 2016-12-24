angular.module('hello').component('hello', {
    templateUrl: 'components/hello/hello.template.html',
    controller: function() {
    this.greeting = 'hello';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
    };
  }
});
