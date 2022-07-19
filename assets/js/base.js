// ---
$( document ).ready(function() {
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
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


  const checkboxes = document.querySelectorAll( 'input[type=checkbox]' );

  var myFunction = function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      };
  };

  for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('click', myFunction, false);
  }

  $(".o-modal-label--left").mouseenter(function(){
    $(".c-traveler").css("left", "40%");
  });

  $(".o-modal-label--right").mouseenter(function(){
    $(".c-traveler").css("left", "60%");
    $(".c-traveler").css("transform", "scaleX(-1) translateX(-50%)");
  });

  $(".o-modal-label").mouseleave(function(){
    $(".c-traveler").css("left", "50%");
    $(".c-traveler").css("transform", "translateX(-50%)");
  });

  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st <= 380)  {
      $(".c-traveler").addClass('static');
    } 
    if (st > 380 ){
      $(".c-traveler").removeClass('static');
    }
  });
});
// ---

