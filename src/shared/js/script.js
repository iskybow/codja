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

  // scroll
  $('body section, body aside').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {
    e.preventDefault();

    if (e.originalEvent.wheelDelta >= 0) {
      let targetSectionPrev = $(this).prev()[0].tagName;
      if (targetSectionPrev == 'SECTION') {
        // $('.jsShowLine').removeClass('active-line');
        let targetSectionPrevSection = $(this).prev();
        let targetSectionPrevSectionId = targetSectionPrevSection.attr('id');
        let targetSectionPrevSectionTop = targetSectionPrevSection.offset().top;
        $('html').animate({scrollTop: targetSectionPrevSectionTop}, {duration: 650, easing: 'swing', queue: false});
      } else {
        return;
      }
    } else {
      let targetSectionNext = $(this).next()[0].tagName;
      if (targetSectionNext == 'SECTION') {
        $('.jsShowLine').removeClass('active-line');
        let targetSectionNextSection = $(this).next();
        let targetSectionNextSectionId = targetSectionNextSection.attr('id');
        let navLink = $('.jsShowLine').find('a');
        navLink.each(function (index) {
          if ($(this)[0].hash == '#'+targetSectionNextSectionId) {
            $('.jsAddDelay').css({'transition-delay': '0'});
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line');
          }
        });
        console.log(navLink);
        let targetSectionNextSectionTop = targetSectionNextSection.offset().top;
        $('html').animate({scrollTop: targetSectionNextSectionTop}, {duration: 650, easing: 'swing', queue: false});
      } else {
        return;
      }
    }
  });

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
