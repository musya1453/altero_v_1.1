(function ($) {

  $(window).load(function () {
    var $btns = $('.section-faq ul li .title'),
      $elems = $('.section-faq ul li');

    $btns.on('click touch', function (e) {
      e.preventDefault();

      var $parent = $(this).parent();

      $elems.removeClass('active');
      $parent.addClass('active');
    })
  })

  $(window).load(function () {
    $('.slick-slider .slides').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

})(jQuery);

