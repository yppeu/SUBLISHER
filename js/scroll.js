$(function () {
  console.log(window.scrollY);

  $(".scroll01").click(function () {
    console.log(1);
    window.scrollBy(0, 825);
    //$("window").scrollTop(836);
  });
  $(window).scroll(function () {
    $("body").on("mousewheel", function (e) {
      $(".scroll").text(Math.ceil(window.scrollY));
      let wheel = e.originalEvent.wheelDelta;
      if (wheel > 0) {
        //스크롤 올릴때
        $(".top").fadeIn();
        console.log("올리는 중");
        console.log(window.scrollY);
      } else {
        //스크롤 내릴때
        $(".top").fadeOut();
        console.log("내리는 중");
        console.log(window.scrollY);
      }
    });
  });
});
