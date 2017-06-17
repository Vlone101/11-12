(function ($) {
  $(function () {

    $('[data-jcarousel]').each(function () {
      var el = $(this);
      el.jcarousel(el.data());
    });

    $('[data-jcarousel-control]').each(function () {
      var el = $(this);
      el.jcarouselControl(el.data());
    });

    $('.jcarousel').each(function () {
      var el = $(this);
      el.jcarouselControl(el.data());
    });

  });
})($);

//-----------------MENU---------------

$(function () {
  $('.menu__list__dropdown').hover(
    function () {
      $(this).children('.submenu').slideDown(200);
    },
    function () {
      $(this).children('.submenu').slideUp(200);
    }
  );
});

//------------CHECKBOX-------------

var $checkbox = $('.jq-checkbox');

$checkbox.mousedown(function () {
  changeCheck($(this));
});

$checkbox.each(function () {
  changeCheckStart($(this));
});

function changeCheck(el) {
  var input = el.find('input').eq(0);
  if (!input.attr('checked')) {
    el.css('background-position', '0 -32px');
    input.attr('checked', true);
  } else {
    el.css('background-position', '0 0');
    input.attr('checked', false);
  }
  return true;
}

function changeCheckStart(el) {
  var input = el.find('input').eq(0);
  if (input.attr('checked')) {
    el.css('background-position', '0 -32px');
  }
  if (input.attr('disabled')) {
    el.css('background-image', 'url("img/checkbox__dis.png")');
  }
  return true;
}

//-------------BUTTON COLOR SITE-----------
$(function () {
  var $bC1 = $('.button__color');
  var $bC2 = $('.button__color2');
  var $bCT = $('.button__color__text');
  var $h1Chec = $('.h1-chec');
  var $h1Select = $('.h1-select');
  var $body = $('body');

  $bC1.mousedown(function () {
    $body.css({
      background: '#eaeaea'
    });
    $bCT.css({
      color: 'black'
    });
    $h1Chec.css({
      color: '#2a2a2a'
    });
    $h1Select.css({
      color: '#2a2a2a'
    });
    $bC1.css({
      backgroundPosition: '2px -53px'
    });
    $bC2.css({
      backgroundPosition: '-53px 3px'
    });
 
  });
  $bC2.mousedown(function () {
    $body.css({
      background: '#141414'
    });
    $bCT.css({
      color: 'aliceblue'
    });
    $h1Chec.css({
      color: '#7e7e7e'
    });
    $h1Select.css({
      color: '#7e7e7e'
    });
    $bC1.css({
      backgroundPosition: '2px 3px'
    });
    $bC2.css({
      backgroundPosition: '-53px -53px'
    });
  });
});

//------------SELECTED-------------
$(function () {
  $(".country_id").selectbox({});
});