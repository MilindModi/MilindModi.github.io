/**
 * Template Name: Folio - v2.0.1
 * Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
$(document).ready(function () {
  "use strict";
  $("#main-nav, #main-nav-subpage").slideDown(700);

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  if ($(window).width() < 768 && $(window).width() > 484) {
    var el = document.querySelector(".hero-content h1");
    el.outerHTML = "<h2>" + el.innerHTML + "</h2>";
  } else if ($(window).width() < 485 && $(window).width() > 429) {
    var el = document.querySelector(".hero-content h1");
    el.outerHTML = "<h3>" + el.innerHTML + "</h3>";
  } else if ($(window).width() < 430 && $(window).width() > 374) {
    var el = document.querySelector(".hero-content h1");
    el.outerHTML = "<h4>" + el.innerHTML + "</h4>";
  } else if ($(window).width() < 375) {
    var el = document.querySelector(".hero-content h1");
    el.outerHTML = "<h5>" + el.innerHTML + "</h5>";
  }

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    if ($(window).width() < 768) {
      // $(".nav-menu").slideUp();
    }

    var target = this.hash,
      menu = target;

    target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80,
        },
        500,
        "swing",
        function () {
          window.location.hash = target.selector;
          $(document).on("scroll", onScroll);
        }
      );
  });

  function onScroll(event) {
    if ($(".home").length) {
      var scrollPos = $(document).scrollTop();
      $("nav ul li a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass("subpage-nav");
    } else {
      // $("#main-nav").slideUp(700);
      // $("#main-nav-subpage").hide();
      // $("#main-nav-subpage").addClass("subpage-nav");
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $(".responsive").on("click", function (e) {
    $(".nav-menu").slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    // var strings = $('.typed-items').text().trim();
    var strings = [$(".typed-items").data("typed-person")];
    // strings = strings.split(',');

    typed.typed({
      strings: strings,
      typeSpeed: 50,
      loop: false,
    });

    document.getElementById("typed").style.textDecoration = "underline";
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $(".services-carousel").owlCarousel({
    autoplay: false,
    loop: false,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 4,
      },
    },
  });
});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-thumbnail",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({
      filter: $(this).data("filter"),
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });
});
