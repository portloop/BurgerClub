$(document).ready(() => {
  new WOW().init();

  $('.category').click((e) => {
    let currentElement = $(e.target);
    $('.products-container').hide();
    let id = currentElement.data('id')
    $('#' + id).show();

    $('.category').removeClass('active');
    currentElement.addClass('active')


    $('#' + id + ' .products').slick('refresh');
    $('#' + id + ' .products-nav').slick('refresh');
  });


  // jQuery('.products-nav').children('.product-nav').css('opacity', 0.3);
  // jQuery('.products-nav').children(' .slick-slide .product-nav.slick-current ').css('opacity', 1);

  $('#burgers-container .products').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#burgers-container .products-nav'
  });
  $('#burgers-container .products-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '#burgers-container .products',
    dots: false,
    centerMode: false,
    Infinity: false,
    focusOnSelect: true
  });


  $('#fries-container .products').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#fries-container .products-nav'
  });
  $('#fries-container .products-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '#fries-container .products',
    dots: false,
    centerMode: false,
    Infinity: false,
    focusOnSelect: true
  });

  $('#sauses-container .products').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#sauses-container .products-nav'
  });
  $('#sauses-container .products-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '#sauses-container .products',
    dots: false,
    centerMode: false,
    Infinity: false,
    focusOnSelect: true
  });

  $('#drinks-container .products').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#drinks-container .products-nav'
  });
  $('#drinks-container .products-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '#drinks-container .products',
    dots: false,
    centerMode: false,
    Infinity: false,
    focusOnSelect: true
  });


  $('#reviews').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
  });

  $('.open-modal').click(() => {
    $('#reservation-container').css('display', 'flex')
  });

  $('#reservation-cancel, #reservation-container').click((e) => {
    if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
      $('#reservation-container').hide();
    }
  })

  $('#reserve-button > button').click(() => {
    let name = $('#name');
    let count = $('#count');
    let phone = $('#phone');
    let time = $('#time');

    if (name.val() && count.val() && phone.val() && time.val()) {

      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: 'name=' + name.val() + '&count' + count.val() + '&phone' + phone.val() + '&time' + time.val(),
        success: () => {
          $('#reservation-send').show();
          $('#reservation-content').hide();
        },
        error: () => {
          $('#reservation-container').hide();
          alert('Ошибка сервера! Свяжитесь, пожалуйста, по номеру телефона')
        }
      });
    } else {
      $('#reserve-error').show();
    }
  })

  $('#burger').click(() => {
    $('.header').toggleClass('menu-open');
  })

  $('.header-menu ul li').click(() => {
    $('.header').removeClass('menu-open');
  })
});