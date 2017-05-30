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

})(jQuery);

