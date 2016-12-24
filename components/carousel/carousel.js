angular.module('hello').component('carousel', {
  bindings: { images: '<' },
  templateUrl: 'components/carousel/carousel.template.html',
  controller: function() {
    this.greeting = 'hello';

    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
    }

    $('.carousel').carousel();
    $('.carousel').carousel(0);
  }
});
