/* ham */
$(".ham").click(function () {
  $(this).toggleClass("active");
});

// mgnb
$(".ham").click(function () {
  $(".mgnb_wrap").fadeToggle();

  let txt = $(".ham").text();
  if (txt == "버튼열기") {
    $(".ham").text("버튼닫기");
    $("body").css("overflow", "hidden"); // 스크롤 막기
  } else {
    $(".ham").text("버튼열기");
    $("body").css("overflow-y", "auto"); // 스크롤 다시 활성화
  }
});


//banner_list
const banner_list = new Swiper(".banner_list", {
  loop: true,
  speed: 2000,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

/* popup */
$("#footer .footer_bottom .service ").click(function () {
  $(".popup").fadeIn();
})
$(".popup_close").click(function () {
  $(".popup").fadeOut();
})


