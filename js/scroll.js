$(function () {
  $(window).scroll(function () {
    console.log(window.scrollY);
    $("body").on("mousewheel", function (e) {
      //html에 좌표 찍기
      $(".scroll").text(Math.ceil(window.scrollY));
      let wheel = Math.ceil(window.scrollY);
      console.log(Math.ceil(wheel));
      if (wheel >= 0 && wheel < 700) {
        $(".navbar_block").css("color", "#00283D");
      } else if (wheel >= 700 && wheel <= 1460) {
        $(".navbar_block").css("color", "#FFD639");
      } else if (wheel >= 1460 && wheel <= 2400) {
        $(".navbar_block").css("color", "#00283D");
      } else if (wheel > 2400 && wheel <= 3000) {
        $(".navbar_block").css("color", "#FFD639");
      } else if (wheel >= 3000 && wheel <= 3933) {
        $(".navbar_block").css("color", "#00283D");
      } else {
        $(".navbar_block").css("color", "#FFD639");
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
