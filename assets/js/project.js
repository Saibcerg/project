$(document).ready(function () {
  // header

  let header = document.querySelector("header");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 40) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  };

  // testimonial owl carousel

  $(".cl1").owlCarousel({
    loop: true,
    items: 3,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,

    responsive: {
      0: {
        items: 1,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
      },
      600: {
        items: 2,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
      },
      1000: {
        items: 3,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
      },
    },
  });

  // end testimonial owl carousel

  // client-owl
  $(".cl2 ").owlCarousel({
    loop: true,
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,

    responsive: {
      0: {
        items: 2,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
      },
      600: {
        items: 4,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
      },
      1000: {
        items: 6,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
      },
    },
  });

  // client-owl end

  // back to top

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll").fadeIn();
      } else {
        $("#scroll").fadeOut();
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  // sorting

  $("#all").click(function () {
    $(".gridd>*").fadeIn(2000);
  });

  $("#app").click(function () {
    $(".gridd>*").fadeOut(2000);
    $(".gridd .app ").fadeIn(2000);
  });

  $("#product").click(function () {
    $(".gridd>*").fadeOut(2000);
    $(".gridd .product").fadeIn(2000);
  });

  $("#branding").click(function () {
    $(".gridd>*").fadeOut(2000);
    $(".gridd .branding").fadeIn(2000);
  });
  $("#book").click(function () {
    $(".gridd>*").fadeOut(2000);
    $(".gridd .book").fadeIn(2000);
  });
}); //end of ready
