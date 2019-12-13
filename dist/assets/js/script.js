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

        $('.jsShowLine').removeClass('active-line').removeClass('show-title');
        var _targetSectionPrev = $(this).prev();
        var targetSectionPrevId = _targetSectionPrev.attr('id');
        var navLink = $('.jsShowLine').find('a');
        $('.jsAddDelay').css({ 'transition-delay': '0s' });
        navLink.each(function (index) {
          if ($(this)[0].hash == '#' + targetSectionPrevId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line').addClass('show-title');
          }
        });
        var targetSectionPrevTop = _targetSectionPrev.offset().top;
        $('html').animate({ scrollTop: targetSectionPrevTop }, { duration: 650, easing: 'swing', queue: false });
      } else {
        return;
      }
    } else {
      var targetSectionNext = $(this).next()[0].tagName;
      if (targetSectionNext == 'SECTION') {
        $('.jsShowLine').removeClass('active-line').removeClass('show-title');
        var _targetSectionNext = $(this).next();
        var targetSectionNextId = _targetSectionNext.attr('id');
        var _navLink = $('.jsShowLine').find('a');
        $('.jsAddDelay').css({ 'transition-delay': '0s' });
        _navLink.each(function (index) {
          if ($(this)[0].hash == '#' + targetSectionNextId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line').addClass('show-title');
          }
        });
        var targetSectionNextTop = _targetSectionNext.offset().top;
        $('html').animate({ scrollTop: targetSectionNextTop }, { duration: 650, easing: 'swing', queue: false });
      } else {
        return;
      }
    }
  });

  //line set delay
  lineShow();

  //load page set section lines
  function onEntry(entry) {
    $(entry).each(function () {
      if ($(this)[0].intersectionRatio > 0) {
        $(this)[0].target.classList.add('visible');
        $('.jsShowLine').removeClass('active-line').removeClass('show-title');
        var targetSection = $(this)[0].target;
        var targetSectionId = targetSection.id;
        var navLink = $('.jsShowLine').find('a');
        $('.jsAddDelay').css({ 'transition-delay': '0s' });
        navLink.each(function (index) {
          if ($(this)[0].hash == '#' + targetSectionId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line').addClass('show-title');
          }
        });
        var targetSectionTop = targetSection.offsetTop;
        $('html').animate({ scrollTop: targetSectionTop }, { duration: 650, easing: 'swing', queue: false });
      }
    });
  }

  var options = {};

  var observer = new IntersectionObserver(onEntry, options);

  var elements = document.querySelectorAll('section');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elm = _step.value;

      observer.observe(elm);
    }

    //show line
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  $('.jsShowLine').mouseenter(function () {
    lineShow();
    $(this).addClass('active-line').addClass('show-title');
    $(this).prevAll().addClass('active-line');
  });

  function reverseLine(elem) {
    if (!$(elem).prev().hasClass('show-title')) {

      // reverseLine()
    }
  }

  //hide line
  $('.jsShowLine').mouseleave(function () {
    reverseLine(this);
    // lineShowReverse(this);
    // $(this).removeClass('active-line').removeClass('show-title');
    // $(this).prevAll().removeClass('active-line');
  });
});
//# sourceMappingURL=script.js.map
