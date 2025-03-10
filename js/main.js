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
    $("body").css("overflow", "auto"); // 스크롤 다시 활성화
  }
});




//banner_list
const banner_list = new Swiper(".banner_list", {
  loop: true, // 기본값 false,
  speed: 2000,
  effect: "fade",
  // autoplay: {
  //   delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
  //   disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  // },
  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼
    prevEl: '.swiper-button-prev', // 이전 버튼
  },
  // breakpoints: {
  //   0: {
  //     // 가로해상도가 640px 이상일 경우
  //     slidesPerView: 1.3,

  //   },

  //   400: {
  //     // 가로해상도가 640px 이상일 경우
  //     slidesPerView: 1.5,

  //   },

  //   1024: {
  //     // 가로해상도가 1024px 이상일 경우
  //     slidesPerView: 2,

  //   },

  //   1400: {
  //     // 가로해상도가 1024px 이상일 경우
  //     slidesPerView: 2.3,

  //   },
  // },
});

/* popup */
$("#footer .footer_bottom .service ").click(function () {
  $(".popup").fadeIn();
})
$(".popup_close").click(function () {
  $(".popup").fadeOut();
})


