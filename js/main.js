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
    $("#header").addClass("fix");

    //$("body").css("overflow-y", "hidden"); // 스크롤 막기
  } else {
    $(".ham").text("버튼열기");
    $("#header").removeClass("fix");

    //$("body").css("overflow-y", "auto"); // 스크롤 다시 활성화
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


//WOW
new WOW().init();
wow = new WOW({
  boxClass: 'txt_img',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'txt',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

$(".gotop").hide();
$(window).scroll(function () {
  let scrollpos = $(this).scrollTop();
  if (scrollpos > 300) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});