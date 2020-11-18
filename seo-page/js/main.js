$(function () {
    $(".footer-title1").on("click", function () {
      $(".footer-link1").toggleClass("footer-list__link--active");
    });
    $(".footer-title2").on("click", function () {
      $(".footer-link2").toggleClass("footer-list__link--active");
    });
    $(".footer-title3").on("click", function () {
      $(".footer-link3").toggleClass("footer-list__link--active");
    });
    $(".footer-title4").on("click", function () {
      $(".footer-link4").toggleClass("footer-list__link--active");
    });

    $(".menu__list-btn").on("click", function () {
      $(".menu__list-items").toggleClass("active");
    });
});
