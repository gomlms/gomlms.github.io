$(document).ready(function(){

});

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event){
// On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$('img').on('dragstart', function(event) {
  event.preventDefault();
});

$('.work-tile').click(function(event){
  var modal = document.getElementById('tploAppModal');
  var navBar = document.getElementById('navBar');

  modal.style.opacity="1";
  $('.modal-app').css('z-index', 1);
  navBar.style.opacity="0";
  navBar.style.display="none";
});

$('#modalClose').click(function(event){
  var modal = document.getElementById('tploAppModal');
  var navBar = document.getElementById('navBar');

  modal.style.opacity="0";
  $('.modal-app').css('z-index', -1);
  navBar.style.opacity="1";
  navBar.style.display="flex";
});
