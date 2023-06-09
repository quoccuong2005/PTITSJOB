const GUI = {};
// GUI._initSLiderPopular = function () {
//   if (typeof $('.popular-slide').slick === 'function') {
//     if ($('.popular-slide').length > 0) {
//       $('.popular-slide').slick({
//         infinite: true,
//         slidesToShow: 5,
//         autoplay: true,
//         centerMode: true,
//         centerPadding: 0,
//         autoplaySpeed: 5000,
//         nextArrow: '<i class="fa fa-chevron-right t-right" ></i>',
//         prevArrow: '<i class="fa fa-chevron-left t-left" ></i>',
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 3,
//             },
//           },
//           {
//             breakpoint: 576,
//             settings: {
//               slidesToShow: 2,
//             },
//           },
//         ],
//       });
//     }
//   }
// };
// GUI._initIcheck = function () {
//   $('input[type="checkbox"]').iCheck({
//     checkboxClass: 'icheckbox_square-blue',
//     radioClass: 'iradio_square-blue',
//     increaseArea: '20%',
//   });
//   $('input.iCheck').iCheck({
//     checkboxClass: 'icheckbox_square-blue',
//     radioClass: 'iradio_square-blue',
//     increaseArea: '20%',
//   });
// };
// GUI._initSwitch = function () {
//   $('.switch-btn').click(function () {
//     $(this).toggleClass('on');
//   });
// };
GUI._initWow = function () {
  console.log("run run run ")
  if ($(window).width() > 991) {
    wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();
  }
};
GUI._initShowText = function () {
  $(".modal_tab_sign_in li a").click(function () {
    if ($(this).hasClass("tab1")) {
      $(".modal_footer_signin").removeClass("d-none");
      $(".modal_footer_register").addClass("d-none");
    } else {
      $(".modal_footer_signin").addClass("d-none");
      $(".modal_footer_register").removeClass("d-none");
    }
  });
  $(".modal_footer_signin a").click(function () {
    $('#myTab a[href="#register"]').tab("show");
    $(".modal_footer_signin").addClass("d-none");
    $(".modal_footer_register").removeClass("d-none");
  });
  $(document).on("click", ".SignIn", function () {
    $('#myTab a[href="#sign_in"]').tab("show");
    $(".modal_footer_signin").removeClass("d-none");
    $(".modal_footer_register").addClass("d-none");
  });
  $(document).on("click", ".SignUp", function () {
    $('#myTab a[href="#register"]').tab("show");
    $(".modal_footer_signin").addClass("d-none");
    $(".modal_footer_register").removeClass("d-none");
  });
  $(document).on("click", ".share_detail", function () {
    $(".share_link").toggleClass("show");
  });

  $(document).on("click", ".show-login-payment", function () {
    let angle = +$(".show-login-payment").data("angle") + 180; // clockwisee
    $(".show-login-payment")
      .css({ transform: `rotate(${angle}deg)` })
      .data("angle", angle);
  });

  $(document).on(
    "click",
    ".search_filter_box.accordion .your_room_title",
    function () {
      $(this).parent().next(".collapse").slideToggle();
    }
  );
  if ($(".detail_description_link").length > 0) {
    var line = $(".detail_description_item ").height() / 21;
    if (line > 5) {
      $(".detail_description_link").show();
      $(".detail_description_item .show_desc_detail").addClass("text5line");
    }
    $(window).resize(function () {
      if (line > 5) {
        $(".detail_description_link").show();
        $(".detail_description_item .show_desc_detail").addClass("text5line");
      }
    });
  }
  $(document).on("click", ".detail_description_link", function () {
    $(this)
      .closest(".detail_description_item")
      .find(".show_desc_detail")
      .removeClass("text5line");
    $(this).text($(this).attr("textCollapse"));
    $(this).removeClass("detail_description_link");
    $(this).addClass("collapse_description_link");
  });
  $(document).on("click", ".collapse_description_link", function () {
    $(this)
      .closest(".detail_description_item")
      .find(".show_desc_detail")
      .addClass("text5line");
    $(this).text($(this).attr("textMore"));
    $(this).addClass("detail_description_link");
    $(this).removeClass("collapse_description_link");
  });
  $(document).on("click", ".friend_link", function () {
    $(this).parent().prev(".row.justify-content-center").css("height", "auto");
  });
  $(document)
    .on("click", ".show_more.v1", function () {
      var name = $(this).attr("data-name");
      $(this)
        .closest(".search_filter_box_item")
        .find(".hide-item")
        .removeClass("hide-item");
      $(this).text(name);
      $(this).removeClass("v1").addClass("v2");
    })
    .on("click", ".show_more.v2", function () {
      var name1 = $(this).attr("data-name1");
      $(this)
        .closest(".search_filter_box_item")
        .find(".show-hide-more")
        .addClass("hide-item");
      $(this).text(name1);
      $(this).removeClass("v2").addClass("v1");
    });
};
GUI._initClick = function () {
  $(document)
    .on("click", ".search_going", () => {
      $(".banner_address").toggleClass("show");
    })
    .on("click", ".search_home_adults_children", () => {
      $(".banner_people").toggleClass("show");
    })
    .on("click", ".type_money_show,.language_show", function () {
      $(this).toggleClass("show");
    })
    .on("click", ".menu_mobile_icon", () => {
      $(".menu_mobile").toggleClass("show");
    });
};

GUI._initWindown = function () {
  $(window).click((e) => {
    // windowClick($('.search_going'), $('.banner_address'), e);
    // windowClick($('.search_home_adults_children'), $('.banner_people'), e);
    windowClick($(".type_money_show"), $(".type_money"), e);
    // windowClick($('.language_show ul'), $('.language_show'), e);
    // windowClick($('.menu_mobile_icon'), $('.menu_mobile'), e);
    windowClick($(".social-link"), $(".share_link"), e);
  });
};
function windowClick(a, b, e) {
  if (
    a.has(e.target).length == 0 &&
    !a.is(e.target) &&
    b.has(e.target).length == 0 &&
    !b.is(e.target)
  ) {
    b.removeClass("show");
  }
}
GUI._init = function () {
  // GUI._initSLiderPopular();
  GUI._initWow();
  // GUI._initIcheck();
  GUI._initShowText();
  // GUI._initSwitch();
  // GUI._initClick();
  GUI._initWindown();
};

$(() => {
  GUI._init();
});
