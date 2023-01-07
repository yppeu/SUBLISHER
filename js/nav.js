// document.ready를 쓰면
// 브라우저가 문서를 읽을 때 바디안에 있는 내용을 먼저 읽고 실행한다.
// 이게 없으면 바디안에 내용을 안 읽고 js먼저 실행된다. (순차적으로.)
// document.ready를 안 쓰려면 js를 바디 맨 밑에 넣어두면 된다. (순차적으로.)
$(function () {
  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
  });
  // 열기 아이콘
  $(".navbar_icon").click(function () {
    console.log(1);
    $(".navbar_menu").toggleClass("active");
    $(".navbar_icon").toggleClass("active");
  });
  // 닫기 아이콘
  // $(".navbar_none").click(function () {
  //   console.log(1);
  //   $(".navbar_menu").toggleClass("active");
  //   $(".navbar_none").toggleClass("active");
  //   $(".navbar_block").toggleClass("active");
  // });

  // // 메뉴 리스트
  // $(".navbar_menu").click(function () {
  //   console.log(1);
  //   $(".navbar_block").show();
  //   $(".navbar_block").toggleClass("active");
  //   $(".navbar_menu").hide();
  //   $(".navbar_none").hide();
  //   // $(".navbar_menu").show();
  // });
});
