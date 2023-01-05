$(function (params) {
  //! stikcy navbar
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("navbg");
    } else {
      $(".navbar").removeClass("navbg");
    }
  });

  // ! banner typing animation
  var typed = new Typed(".runtext", {
    strings: [
      "MEHEDI HASSAN JIBON",
      "FULL STACK WEB DEVELOPER",
      "GRAPHICS DESINGER",
      "UI/UI EXPERT",
    ],
    smartBackspace: true,
    typeSpeed: 100,
    startDelay: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
  });

  // ! banner water ripple effect animation

  $(".banner-fluid").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
  // ! about typing animation
  var typed = new Typed(".runtextabout", {
    strings: ["FULL STACK WEB DEVELOPER", "GRAPHICS DESINGER", "UI/UI EXPERT"],
    smartBackspace: true,
    typeSpeed: 100,
    startDelay: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
  });




  // ! animated skillbar
  var p = document.querySelectorAll(".progress-bar");
  p[0].setAttribute("style", "width:98%;transition: 1.5s all");
  p[1].setAttribute("style", "width:90%;transition: 1.7s all");
  p[2].setAttribute("style", "width:75%;transition: 2.5s all");
  p[3].setAttribute("style", "width:88%;transition: 2.7s all");
  p[4].setAttribute("style", "width:85%;transition: 3s all");
  p[5].setAttribute("style", "width:86%;transition: 3.5s all");

});

// !!owl carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})