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
  lineShow();

  // scroll
  $('body section, body aside').bind('mousewheel DOMMouseScroll MozMousePixelScroll scroll', function (e) {
    e.preventDefault();
    if (e.originalEvent.wheelDelta >= 0) {
      var targetSectionPrev = $(this).prev()[0].tagName;
      if (targetSectionPrev == 'SECTION') {
        $('.jsShowLine').removeClass('active-line show-title current-elem');
        var _targetSectionPrev = $(this).prev();
        var targetSectionPrevId = _targetSectionPrev.attr('id');
        var navLink = $('.jsShowLine');
        $('.jsAddDelay').css({ 'transition-delay': '0s' });
        navLink.each(function (index) {
          if ($(this).attr('name') == targetSectionPrevId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line show-title current-elem');
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
        $('.jsShowLine').removeClass('active-line show-title current-elem');
        var _targetSectionNext = $(this).next();
        var targetSectionNextId = _targetSectionNext.attr('id');
        var _navLink = $('.jsShowLine');
        $('.jsAddDelay').css({ 'transition-delay': '0s' });
        $(_navLink).each(function (index) {
          if ($(this).attr('name') == targetSectionNextId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line show-title current-elem');
          }
        });
        var targetSectionNextTop = _targetSectionNext.offset().top;
        $('html').animate({ scrollTop: targetSectionNextTop }, { duration: 650, easing: 'swing', queue: false });
      } else {
        return;
      }
    }
  });

  //load page set section lines
  var clickFlag = false;
  function onEntry(entry) {
    $(entry).each(function () {
      if ($(this)[0].intersectionRatio > 0) {
        $('section').removeClass('visible');
        $(this)[0].target.classList.add('visible');
        $('.jsShowLine').removeClass('active-line show-title current-elem');
        var targetSection = $(this)[0].target;
        var targetSectionId = targetSection.id;
        var navLink = $('.jsShowLine');
        $('.jsAddDelay').css({ 'transition-delay': '0s' });
        $(navLink).each(function (index) {
          if ($(this).attr('name') == targetSectionId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line show-title current-elem');
          }
        });
        if (clickFlag != true) {
          var targetSectionTop = targetSection.offsetTop;
          $('html').animate({ scrollTop: targetSectionTop }, { duration: 650, easing: 'swing', queue: false });
          clickFlag = false;
        }
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
    $(this).addClass('active-line show-title');
    $(this).prevAll().addClass('active-line');
  });

  //line hide reverse
  function lineShowReverse(self) {
    var allLine = $(self).prevAll('.jsShowLine');
    var allLineNext = $(self).nextAll('.jsShowLine');
    var fl = false;
    $(allLineNext).each(function (index) {
      if ($(this).hasClass('show-title')) {
        fl = true;
        return false;
      }
    });
    if (!fl) {
      $(self).find('.jsAddDelay').css({ 'transition-delay': '0s' });
      $(allLine).each(function (index) {
        var delay = (index + 1) * 0.2;
        $(this).find('.jsAddDelay').css({ 'transition-delay': delay + 's' });
      });
      reverseLine(self);
    } else {
      $(self).removeClass('show-title');
    }
  }

  //line hide reverse
  function reverseLine(elem) {
    if (!$(elem).hasClass('current-elem')) {
      $(elem).removeClass('active-line show-title');
      reverseLine($(elem).prev());
    }
  }

  //hide line
  $('.jsShowLine').mouseleave(function () {
    lineShowReverse(this);
  });

  //click nav
  $('.jsAnimTo').click(function () {
    clickFlag = true;
    var linkHash = $(this).attr('name');
    var linkSection = $('#' + linkHash);
    $('.jsShowLine').removeClass('active-line show-title current-elem');
    var navLink = $('.jsShowLine');
    $('.jsAddDelay').css({ 'transition-delay': '0s' });
    $(navLink).each(function (index) {
      if ($(this).attr('name') == linkHash) {
        $(this).closest('li').prevAll().addClass('active-line');
        $(this).closest('li').addClass('active-line show-title current-elem');
      }
    });
    var linkSectionPosition = $(linkSection)[0].offsetTop;
    $('html').animate({ scrollTop: linkSectionPosition }, { duration: 650, easing: 'swing', queue: false });
    if ($('.jsShowMenu').hasClass('menu-open')) {
      $('.jsOpenMenu').removeClass('menu-active');
      $('.jsShowMenu').removeClass('menu-open').animate({ top: '-100%' }, { duration: 800, easing: 'swing', queue: false });
    } else if ($('.jsShowContactsModal').hasClass('contacts-open')) {
      $('.jsOpenContactsModal').removeClass('contacts-active');
      $('.jsShowContactsModal').removeClass('contacts-open').animate({ top: '100%' }, {
        duration: 800,
        easing: 'swing',
        queue: false
      });
    }
  });

  //portfolio slider
  //next slide
  $('.next').click(function () {
    var prependList = function prependList() {
      if ($('.slider__slide').hasClass('activeNow')) {
        var $slicedCard = $('.slider__slide').slice(0, 1).removeClass('transformThis').removeClass('activeNow');
        $('.slider__list').append($slicedCard);
      }
    };
    $('.slider__slide').first().removeClass('transformPrev').addClass('transformThis').next().addClass('activeNow');
    setTimeout(function () {
      prependList();
    }, 300);
  });

  //prev slide
  var lastCard = $(".slider__slide").length - 1;
  $('.prev').click(function () {
    var appendToList = function appendToList() {
      if ($('.slider__slide').hasClass('activeNow')) {
        var $slicedCard = $('.slider__slide').slice(lastCard).addClass('transformPrev');
        $('.slider__list').prepend($slicedCard);
      }
    };

    $('.slider__slide').removeClass('transformPrev').first().addClass('activeNow').nextAll().removeClass('activeNow');
    setTimeout(function () {
      appendToList();
    }, 150);
  });

  //dots slider
  function dotsSlider() {
    var allSlide = $('.slider__slide');
    var dotsListBlock = $('.slider__dots')[0];
    allSlide.each(function (index) {
      var html = '<li class="jsDotsSlide" id="' + index + '"><button></button></li>';
      $(dotsListBlock).append(html);
    });
    $('.slider__dots li').first().addClass('dot-active');
  }
  dotsSlider();

  //dots click
  $('.jsDotsSlide').click(function () {
    var indexSlide = $(this).attr('id');
    var currentIndex = $('.dot-active').attr('id');
    if (indexSlide > currentIndex) {
      for (var i = 0; i < indexSlide; i++) {
        $('.next').click();
        $('.jsDotsSlide').removeClass('dot-active');
        $(this).addClass('dot-active');
      }
    } else {

      for (var _i = currentIndex; _i > indexSlide; _i--) {
        $('.prev').click();
        $('.jsDotsSlide').removeClass('dot-active');
        $(this).addClass('dot-active');
      }
    }
  });

  //menu
  $('.jsOpenMenu').click(function () {
    if ($('.jsShowMenu').hasClass('menu-open')) {
      $('.jsOpenMenu').removeClass('menu-active');
      $('.jsShowMenu').removeClass('menu-open').animate({ top: '-100%' }, { duration: 800, easing: 'swing', queue: false });
    } else {
      $('.jsOpenMenu').addClass('menu-active');
      $('.jsShowMenu').addClass('menu-open').animate({ top: 0 }, { duration: 800, easing: 'swing', queue: false });
    }
  });

  //contacts modal
  $('.jsOpenContactsModal').click(function () {
    if ($('.jsShowContactsModal').hasClass('contacts-open')) {
      $('.jsOpenContactsModal').removeClass('contacts-active');
      $('.jsShowContactsModal').removeClass('contacts-open').animate({ top: '100%' }, {
        duration: 800,
        easing: 'swing',
        queue: false
      });
    } else {
      $('.jsOpenContactsModal').addClass('contacts-active');
      $('.jsShowContactsModal').addClass('contacts-open').animate({ top: 0 }, {
        duration: 800,
        easing: 'swing',
        queue: false
      });
    }
  });
});
//# sourceMappingURL=script.js.map
