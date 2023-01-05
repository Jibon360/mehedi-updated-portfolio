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
});
