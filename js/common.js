$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    loop: true,
  });





  

  $('.burgerbtn').click(function () {
    $('.header__nav').addClass('show');
  });
  $('.closemenu').click(function () {
    $('.header__nav').removeClass('show');
  });


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("header.header").addClass("whiteheader");
    } else {
      $("header.header").removeClass("whiteheader");
    }
  });

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("header.header").addClass("whiteheader");
  } else {
    $("header.header").removeClass("whiteheader");
  }






  //  ------ //
  // input mask 
  if ($('#popupNumber').length) {
    $('#popupNumber').inputmask({
      mask: "+380" + " 99-999-99-99",
      placeholder: "X",
      showMaskOnFocus: true,
      showMaskOnHover: true,
    });
  }

  //  cotegory dropdown
  $('.category__dropdown').find('a').on('click', function (evt) {
    evt.preventDefault(evt);
    $(this).toggleClass('active');
    $(this).next('.category__dropdown-box ').slideToggle();
  });

  //  cotegory mobile dropdown
  $('.category__btn').on('click', function () {
    $('.catalog__category').addClass('active');
  });
  $('.catalog__category-close').on('click', function () {
    $('.catalog__category').removeClass('active');
  });


  //  slider product image
  var smallImage = new Swiper(".smallImage", {
    slidesPerView: 4,
    direction: "vertical"
  });
  var bigImage = new Swiper(".bigImage", {
    effect: "fade",
    thumbs: {
      swiper: smallImage,
    },
  });

  //  popup
  $('.popupbtn').on('click', function (e) {
    e.preventDefault();
    $('.popup').addClass('active');
  });
  $('.popup__close').on('click', function () {
    $('.popup').removeClass('active');
  });

  // check form
  $('#popupCheck').on('change', function () {
    if ($(this).is(':checked')) {
      $('.popup__form-btn').find('input').attr('disabled', false);
    }
    else {
      $('.popup__form-btn').find('input').attr('disabled', true);
    }
  });

});