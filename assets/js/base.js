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

  /*var offset = $(".moving").offset();
  console.log(offset.left);
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    console.log(st);
    if (st > 700 && st <= 1000)  {
      $(".moving").css("left", offset.left - (st-699));
    } 
    if (st > 1000 && st <= 1400){
      $(".moving").css("left", offset.left + (st-999));
    }if (st > 1400 && st <= 1800){
      $(".moving").css("left", offset.left - (st-1399));
    }if (st > 1800 && st <= 2200){
      $(".moving").css("left", offset.left + (st-1799));
    }if (st > 2200 && st <= 2600){
      $(".moving").css("left", offset.left - (st-2199));
    }if (st > 2600 && st <= 3000){
      $(".moving").css("left", offset.left + (st-2599));
    }if (st > 3000 && st <= 3400){
      $(".moving").css("left", offset.left - (st-2999));
    }if (st > 3400 && st <= 3800){
      $(".moving").css("left", offset.left + (st-3399));
    }if (st > 3800 && st <= 4200){
      $(".moving").css("left", offset.left - (st-3799));
    }if (st > 4200 && st <= 4600){
      $(".moving").css("left", offset.left - (st-4199));
    }
  });*/
});
// ---

