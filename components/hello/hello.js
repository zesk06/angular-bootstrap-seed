angular.module('hello').component('hello', {
    templateUrl: 'components/hello/hello.template.html',
    controller: function() {
    this.greeting = 'Welcome to ad-seed!';
  }
});
