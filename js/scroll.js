$(function () {
  console.log(window.scrollY);

  //   $(".scroll01").click(function () {
  //     console.log(1);
  //     console.log(window.scrollY);
  //     window.scrollBy(0, 825);
  //     $("window").scrollTop(836);
  //   });
  $(window).scroll(function () {
    console.log(window.scrollY);
    $("body").on("mousewheel", function (e) {
      $(".scroll").text(Math.ceil(window.scrollY));
      let wheel = Math.ceil(window.scrollY);
      console.log(wheel);
      if (wheel >= 700) {
        $(".navbar_icon").css("color", "#FFD639");
      } else if (wheel >= 1500) {
        $(".navbar_icon").css("color", "#00283D");
      } else if (wheel >= 2400) {
        $(".navbar_icon").css("color", "#FFD639");
      } else if (wheel >= 3000) {
        $(".navbar_icon").css("color", "#00283D");
      } else if (wheel == 3700) {
        // $(".navbar_icon").attr("src", "./img/play.png");
        $(".navbar_block").click(function () {
          alert(1);
          $(".navbar_block").hide();
          $(".navbar_none").show();
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            400
          );
          return false;
        });
      }
      //   $(".scroll").text(Math.ceil(window.scrollY));
      //   //originalEvent : jQuery 가 감싸지 않은 기존 이벤트를 접근
      //   let wheel = e.originalEvent.wheelDelta;
      //   if (wheel > 0) {
      //     //스크롤 올릴때
      //     console.log("올리는 중");
      //   } else if (wheel == 700) {
      //     alert(1);
      //     $(".navbar_block").css("color", "red");
      //   } else {
      //     //스크롤 내릴때
      //     console.log("내리는 중");
      //   }
    });
  });
});
