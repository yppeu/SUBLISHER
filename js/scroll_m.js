$(function () {
  // window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth",
  // });
  $(window).scroll(function () {
    console.log(window.scrollY);
    $("body").on("mousewheel", function (e) {
      //html에 좌표 찍기
      $(".scroll").text(Math.ceil(window.scrollY));
      let wheel = Math.ceil(window.scrollY);
      console.log(Math.ceil(wheel));
      if (wheel >= 0 && wheel < 700) {
        $(".navbar_block").css("color", "#00283D");
      } else if (wheel >= 700 && wheel <= 1260) {
        $(".navbar_block").css("color", "#FFD639");
        $(".art_one_img").addClass("fadein");
        $("fadein").removeClass("fadein");
      } else if (wheel >= 1260 && wheel <= 2100) {
        $(".navbar_block").css("color", "#00283D");
        $(".art_two h3").addClass("fadein");
        $("fadein").removeClass("fadein");
      } else if (wheel > 2100 && wheel <= 2500) {
        $(".navbar_block").css("color", "#FFD639");
        $(".art_three h3").addClass("fadein");
        $("fadein").removeClass("fadein");
      } else if (wheel >= 2500 && wheel <= 3800) {
        $(".navbar_block").css("color", "#00283D");
        $(".art_four h3").addClass("fadein");
        $("fadein").removeClass("fadein");
      } else {
        $(".navbar_block").css("color", "#FFD639");
        $(".footer_tp").addClass("fadein");
        $("fadein").removeClass("fadein");
        $(".navbar_block").animate(
          {
            rotate: "180deg",
          },
          300
        );
        $(".navbar_block").click(function () {
          console.log(1);
          $("html,body").scrollTop(0);
        });
      }
    });
  });
});
