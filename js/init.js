(function($){
  $(function(){
    var options = [
      {
        selector: '#services', offset: 50, callback: function(el) {
          Materialize.fadeInImage('#services .col');
        }
      },
      {
        selector: '#core-values', offset: 50, callback: function(el) {
          Materialize.fadeInImage('#core-values .col');
        }
      },
      {
        selector: '#career', offset: 50, callback: function(el) {
          Materialize.fadeInImage('#career .col');
        }
      },
      {
        selector: '#knowledge', offset: 50, callback: function(el) {
          Materialize.fadeInImage('#knowledge .card');
        }
      },
      {
        selector: '#books', offset: 50, callback: function(el) {
          Materialize.fadeInImage('#books li');
        }
      },

    ];
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({ scrollOffset: 50 });

Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
