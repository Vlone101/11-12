$(function () {
  
  var $tabs1 = $('.item--1');
  var $tabs2 = $('.item--2');
  var $tabs3 = $('.item--3');

  var $box1 = $('.tabs__box1');
  var $box2 = $('.tabs__box2');
  var $box3 = $('.tabs__box3');

  $tabs1.on('click', function () {
    $box1.show();
    $tabs1.css({
      background: 'linear-gradient(to bottom, #606c88 0%,#c6c6c6 100%)',
      color: '#0f2241'
    });
    $tabs2.css({
      background: 'rgba(0, 0, 0, 0)',
      color: '#ced7e6'
    });
    $tabs3.css({
      background: 'rgba(0, 0, 0, 0)',
      color: '#ced7e6'
    });
    $box2.css('display', 'none');
    $box3.css('display', 'none');
  });
  $tabs2.on('click', function () {
    $box2.show();
    $tabs1.css({
      background: 'rgba(0, 0, 0, 0)',
      color: '#ced7e6'
    });
    $tabs2.css({
      background: 'linear-gradient(to bottom, #606c88 0%,#c6c6c6 100%)',
      color: '#0f2241'
    });
    $tabs3.css({
      background: 'rgba(0, 0, 0, 0)',
      color: '#ced7e6'
    });
    $box1.css('display', 'none');
    $box3.css('display', 'none');
  });
  $tabs3.on('click', function () {
    $box3.show();
    $tabs1.css({
      background: 'rgba(0, 0, 0, 0)',
      color: '#ced7e6'
    });
    $tabs2.css({
      background: 'rgba(0, 0, 0, 0)',
      color: '#ced7e6'
    });
    $tabs3.css({
      background: 'linear-gradient(to bottom, #606c88 0%,#c6c6c6 100%)',
      color: '#0f2241'
    });
    $box1.css('display', 'none');
    $box2.css('display', 'none');
  });


  var $input1 = $('.tabs__input1');
  var $input2 = $('.tabs__input2');
  var $input3 = $('.tabs__input3');
  var $hepl1 = $('.help--1');
  var $hepl2 = $('.help--2');
  var $hepl3 = $('.help--3');

  $input1.hover(
    function () {
      $hepl1.css({
        opacity: '1'
      });
    },
    function () {
      $hepl1.css({
        opacity: '0'
      });
    }
  );
  $input2.hover(
    function () {
      $hepl2.css({
        opacity: '1'
      });
    },
    function () {
      $hepl2.css({
        opacity: '0'
      });
    }
  );
  $input3.hover(
    function () {
      $hepl3.css({
        opacity: '1'
      });
    },
    function () {
      $hepl3.css({
        opacity: '0'
      });
    });
});