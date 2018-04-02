;(function($, undefined) {
  var $soley_dark_link = $('.solely-dark-link'),
      $soley_link = $('.solely-link'),
      $soley_light_link = $('.solely-light-link'),
      $soley_dark_wrap = $('.soley-dark-wrap'),
      $soley_wrap = $('.soley-wrap'),
      $soley_light_wrap = $('.soley-light-wrap'),
      $playlist_wrap = $('.playlist-wrap'),
      $link = $('.link');

  function init() {
    $soley_dark_link.on('click', function() {
      $playlist_wrap.removeClass('show');
      $soley_dark_wrap.addClass('show');
      $link.removeClass('active');
      $soley_dark_link.addClass('active');
    });
    $soley_link.on('click', function() {
      $playlist_wrap.removeClass('show');
      $soley_wrap.addClass('show');
      $link.removeClass('active');
      $soley_link.addClass('active');
    });
    $soley_light_link.on('click', function() {
      $playlist_wrap.removeClass('show');
      $soley_light_wrap.addClass('show');
      $link.removeClass('active');
      $soley_light_link.addClass('active');
    });
  }

  $(init)
} (jQuery));
