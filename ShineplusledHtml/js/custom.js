
// Header js
(function ($) {
  $(function () {

    $('#navbar-toggle').click(function () {
      $('nav ul').slideToggle();
    });


    $('#navbar-toggle').on('click', function () {
      this.classList.toggle('active');
    });


    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    $('html').click(function () {
      $('.navbar-dropdown').hide();
    });
  });
})(jQuery);

// faq sec
$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});
// $(window).on('load', function () {

//   $('.preloader').fadeOut('slow');

// });



jQuery(document).ready(function ($) {
  $("#owl-demo").owlCarousel({
    loop: true,
    autoplay: true,
    lazyLoad:true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    dots: false,
    autoplayTimeout:3000,
    autoplayHoverPause: false,
    items: 1,
    navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });
});



// card stack js

const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')
cardsContainer.style.setProperty('--cards-count', cards.length)
cardsContainer.style.setProperty(
  '--card-height',
  `${cards[0].clientHeight}px`
)
Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20
  card.style.paddingTop = `${offsetTop}px`
  if (index === cards.length - 1) {
    return
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1
  const nextCard = cards[index + 1]
  const cardInner = card.querySelector('.card__inner')
  ScrollObserver.Element(nextCard, {
    offsetTop,
    offsetBottom: window.innerHeight - card.clientHeight
  }).onScroll(({ percentageY }) => {
    cardInner.style.scale = valueAtPercentage({
      from: 1,
      to: toScale,
      percentage: percentageY
    })
    cardInner.style.filter = `brightness(${valueAtPercentage({
      from: 1,
      to: 0.6,
      percentage: percentageY
    })})`
  })
})



$('.service-slider').owlCarousel({

  items: 4,

  loop: true,

  autoplay: true,

  margin: 20,

  nav: true,

  autoWidth: false,

  stagePadding: 0,

  responsive: {

    0: {

      items: 1,

      margin: 10,

      center: true

    },

    600: {

      items: 3

    },

    991: {

      items: 3

    },

    1199: {

      items: 3

    },

    1200: {

      items: 4,

    },

    1500: {

      margin: 0,

      items: 4,

    }



  }

})











// zeynepjs initialization for demo

$(function () {



  var zeynep = $('.zeynep').zeynep({

    opened: function () {

    }

  })



  // dynamically bind 'closing' event

  zeynep.on('closing', function () {

  })



  // handle zeynepjs overlay click

  $('.zeynep-overlay').on('click', function () {

    zeynep.close()

  })

  $('#close-bar').click(function () {

    zeynep.close()

  })



  // open zeynepjs side menu

  $('.btn-open').on('click', function () {

    zeynep.open()

  })



})





//add active classs

var selector = ".zeynep li";



$(selector).click(function () {

  $(selector).removeClass('active');

  $(this).addClass('active');

});







// fix header //////////////////////////////////////////////////

var didScroll;

var lastScrollTop = 0;

var delta = 5;

var navbarHeight = $('header').outerHeight();



$(window).scroll(function (event) {

  didScroll = true;

});



setInterval(function () {

  if (didScroll) {

    hasScrolled();

    didScroll = false;

  }

}, 200);



function hasScrolled() {

  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)

    return;

  if (st > lastScrollTop && st > navbarHeight) {

    $('header').removeClass('nav-down').addClass('nav-up');

  } else {

    if (st + $(window).height() < $(document).height()) {

      $('header').removeClass('nav-up').addClass('nav-down');

    }

  }

  lastScrollTop = st;

}


// category slider
$('#carousel').owlCarousel({
  loop: false,
  margin: 15,
  dots: false,
  nav: true,
  slideBy: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 10,
    },

    600: {
      items: 2,
      margin: 20,
    },
    991: {

      items: 2

    },

    1199: {

      items: 3

    },

    1920: {

      items: 3

    }

  }

});


// product slider
$('#product-corusel').owlCarousel({
  loop: true,
  margin: 15,
  dots: false,
  nav: true,
  slideBy: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 1,
    },


    1920: {

      items: 1

    }

  }

});









// category slider end



// year js
document.getElementById("year").innerHTML = new Date().getFullYear();


// start popup js
jQuery(document).ready(function () {
  jQuery(".fancybox").fancybox();
});

// end popup js


// pluse minus 
var num;
$('.button-count:first-child').click(function () {
  num = parseInt($('input:text').val());
  if (num > 1) {
    $('input:text').val(num - 1);
  }
  if (num == 2) {
    $('.button-count:first-child').prop('disabled', true);
  }
  if (num == 100) {
    $('.button-count:last-child').prop('disabled', false);
  }
});
$('.button-count:last-child').click(function () {
  num = parseInt($('input:text').val());
  if (num < 100) {
    $('input:text').val(num + 1);
  }
  if (num > 0) {
    $('.button-count:first-child').prop('disabled', false);
  }
  if (num == 100) {
    $('.button-count:last-child').prop('disabled', true);
  }
});








