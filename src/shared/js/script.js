class Shared {
  constructor() {
  }
}

$(function () {

  //line show
  function lineShow() {
    let allLine = $('.jsShowLine');
    $(allLine).each(function (index) {
      let delay = 0.2 * index;
      $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
    });
  }

  // let last_scroll = 0;
  // window.onscroll = function (e) {
  //   e.preventDefault();
  //   if (window.scrollY > last_scroll) {
  //     console.log('down');
  //     console.log(window.scrollY);
  //     console.log(last_scroll);
  //     // let b = $('#services').offset().top;
  //     // $('html').animate({ scrollTop: b }, 1100);
  //   } else {
  //     console.log('up');
  //     console.log(window.scrollY);
  //     console.log(last_scroll);
  //   }
  //   last_scroll = window.scrollY;
  // };

  // $('html').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return;
  //   let delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
  //   if (delta >= 0) {
  //     console.log('up');
  //     // let b = $('#services').offset().top;
  //     // $('html').animate({ scrollTop: b }, 1100);
  //   } else {
  //     console.log('down');
  //   }
  //
  // });

  // $('html').bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (e) {
  //   // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //   if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
  //     console.log('up');
  //     let a = $('#main').offset().top;
  //     $('html').animate({ scrollTop: a }, 1100);
  //     // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //   }
  //   else {
  //     console.log('down');
  //     let b = $('#services').offset().top;
  //     $('html').animate({ scrollTop: b }, 1100);
  //     // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //   }
  //   // let b = $('#services').offset().top;
  //   // $('html').animate({ scrollTop: b }, 1100);
  // });

  $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
    // event.preventDefault();

    console.log(event.originalEvent.wheelDelta);
    if (event.originalEvent.wheelDelta >= 0) {
      console.log('Scroll up');
      // let a = $('#main').offset().top;
      // $('html').animate({ scrollTop: a });
    } else {
      console.log('Scroll down');
      // let b = $('#services').offset().top;
      // $('html').animate({ scrollTop: b });
    }
  });

  //line hide reverse
  function lineShowReverse(self) {
    let allLine = $(self).prevAll();
    let allLineLength = allLine.length;
    let allLinePrevAll = {};
    switch (allLineLength) {
      case 4:
        $(self).find('.jsAddDelay').css({'transition-delay': '0s'});
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          let delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
        });
        break;
      case 3:
        $(self).find('.jsAddDelay').css({'transition-delay': '0s'});
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          let delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
        });
        break;
      case 2:
        $(self).find('.jsAddDelay').css({'transition-delay': '0s'});
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          let delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
        });
        break;
      case 1:
        $(self).find('.jsAddDelay').css({'transition-delay': '0s'});
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          let delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
        });
        break;
    }
  }

  //line set delay
  lineShow();

  //show line
  $('.jsShowLine').mouseenter(function () {
    lineShow();
    $(this).addClass('active-line');
    $(this).prevAll().addClass('active-line');
  });

  //hide line
  $('.jsShowLine').mouseleave(function () {
    lineShowReverse(this);
    $(this).removeClass('active-line');
    $(this).prevAll().removeClass('active-line');
  });
});
