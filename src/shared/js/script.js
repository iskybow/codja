class Shared {
    constructor() {}
}

$(function() {

  //line show
  function lineShow() {
    let allLine = $('.jsShowLine');
    $(allLine).each(function (index) {
      let delay = 0.2 * index;
      $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
    });
  }

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
