$(document).ready(function () {
  $(document).on("click", ".features-item", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".category-main").fadeOut(0);
    $("#feature-" + this.id).fadeIn(1000);
  });
    $(".icon-hamburger").click(function () {
      $(".ul-links").slideDown(500);  
    });
    $(".close-image").click(function () {
      $(".ul-links").slideToggle(500);  
    });
    
  $(document).on("click", ".faq-heading", function () {
    $(this).toggleClass("active-faq");
    var arrowId = $("#arrow-" + this.id);
    var arrow = arrowId.html();

    if (arrow === "expand_more") {
      arrow = "expand_less";
      arrowId.text(arrow);
    } else {
      arrow = "expand_more";
      arrowId.text(arrow);
    }
    $("#faq-" + this.id).slideToggle(500);
  });

  function leftToRight(p1, delay) {
    anime({
      targets: [p1],
      translateX: ["+100", "0"],
      opacity: ["0%", "100%"],
      easing: "easeInOutSine",
      duration: 1000,
      delay: delay,
    });
  }
  $(".heading-first-ekam").on("inview", function (event, isInView) {
    if (isInView) {
      anime({
        targets: [".heading-first-ekam", ".para-first-ekam"],
        translateX: [-250, 0],
        duration: 1000,
        easing: "easeInOutSine",
        opacity: ["0%", "100%"],
        translateZ: 0,
      });
      leftToRight(".right-side-hero-img", 500);
      anime({
        targets: [".color-main"],
        translateX: [+20, 0],
        opacity: ["90%", "100%"],
        easing: "easeInOutSine",
        duration: 500,
        translateZ: 0,
      });
    } else {
      anime({
        targets: [".heading-first-ekam", ".para-first-ekam"],
        translateX: 0,
        opacity: 0,
      });
      anime({
        targets: [".right-side-hero-img"],
        translateX: 0,
        opacity: 0,
      });
    }
  });
  $(".color-features").on("inview", function (event, isInView) {
    if (isInView) {
      leftToRight(".heading-for-features-tab", 0);
      anime({
        targets: [".color-features"],
        translateX: [-300, 0],
        opacity: ["100%"],
        easing: "easeInOutSine",
        duration: 500,
        translateZ: 0,
      });
    }
  });
});
