'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

$(function () {

  //line show
  function lineShow() {
    var allLine = $('.jsShowLine');
    $(allLine).each(function (index) {
      var delay = 0.2 * index;
      $(this).find('.jsAddDelay').css({ 'transition-delay': delay + 's' });
    });
  }

  //line hide reverse
  function lineShowReverse(self) {
    var allLine = $(self).prevAll();
    var allLineLength = allLine.length;
    var allLinePrevAll = {};
    switch (allLineLength) {
      case 4:
        $(self).find('.jsAddDelay').css({ 'transition-delay': '0s' });
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          var delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({ 'transition-delay': delay + 's' });
        });
        break;
      case 3:
        $(self).find('.jsAddDelay').css({ 'transition-delay': '0s' });
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          var delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({ 'transition-delay': delay + 's' });
        });
        break;
      case 2:
        $(self).find('.jsAddDelay').css({ 'transition-delay': '0s' });
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          var delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({ 'transition-delay': delay + 's' });
        });
        break;
      case 1:
        $(self).find('.jsAddDelay').css({ 'transition-delay': '0s' });
        allLinePrevAll = $(self).prevAll('.jsShowLine');
        $(allLinePrevAll).each(function (index) {
          var delay = (index + 1) * 0.2;
          $(this).find('.jsAddDelay').css({ 'transition-delay': delay + 's' });
        });
        break;
    }
  }

  // scroll
  $('body section, body aside').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {
    e.preventDefault();

    if (e.originalEvent.wheelDelta >= 0) {
      var targetSectionPrev = $(this).prev()[0].tagName;
      if (targetSectionPrev == 'SECTION') {
        // $('.jsShowLine').removeClass('active-line');
        var targetSectionPrevSection = $(this).prev();
        var targetSectionPrevSectionId = targetSectionPrevSection.attr('id');
        var targetSectionPrevSectionTop = targetSectionPrevSection.offset().top;
        $('html').animate({ scrollTop: targetSectionPrevSectionTop }, { duration: 650, easing: 'swing', queue: false });
      } else {
        return;
      }
    } else {
      var targetSectionNext = $(this).next()[0].tagName;
      if (targetSectionNext == 'SECTION') {
        $('.jsShowLine').removeClass('active-line');
        var targetSectionNextSection = $(this).next();
        var targetSectionNextSectionId = targetSectionNextSection.attr('id');
        var navLink = $('.jsShowLine').find('a');
        navLink.each(function (index) {
          if ($(this)[0].hash == '#' + targetSectionNextSectionId) {
            $('.jsAddDelay').css({ 'transition-delay': '0' });
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line');
          }
        });
        console.log(navLink);
        var targetSectionNextSectionTop = targetSectionNextSection.offset().top;
        $('html').animate({ scrollTop: targetSectionNextSectionTop }, { duration: 650, easing: 'swing', queue: false });
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
//# sourceMappingURL=script.js.map
