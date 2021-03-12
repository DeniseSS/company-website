$(window).scroll(function () {
  if (jQuery(this).scrollTop() > 270) {
       $(".navbar").addClass("fixed-top");
       $(".navbar").addClass("shadow");
  } else {
    $(".navbar").removeClass("fixed-top");
    $(".navbar").removeClass("shadow");
  }
}
);
var $doc = $('html, body');
$('.scroll').click(function () {

  $doc.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  },650);
  return false;
});

