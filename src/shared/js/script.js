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


        $('.jsShowLine').removeClass('active-line').removeClass('show-title');
        let targetSectionPrev = $(this).prev();
        let targetSectionPrevId = targetSectionPrev.attr('id');
        let navLink = $('.jsShowLine').find('a');
        $('.jsAddDelay').css({'transition-delay': '0s'});
        navLink.each(function (index) {
          if ($(this)[0].hash == '#'+targetSectionPrevId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line').addClass('show-title');
          }
        });
        let targetSectionPrevTop = targetSectionPrev.offset().top;
        $('html').animate({scrollTop: targetSectionPrevTop}, {duration: 650, easing: 'swing', queue: false});

      } else {
        return;
      }
    } else {
      let targetSectionNext = $(this).next()[0].tagName;
      if (targetSectionNext == 'SECTION') {
        $('.jsShowLine').removeClass('active-line').removeClass('show-title');
        let targetSectionNext = $(this).next();
        let targetSectionNextId = targetSectionNext.attr('id');
        let navLink = $('.jsShowLine').find('a');
        $('.jsAddDelay').css({'transition-delay': '0s'});
        navLink.each(function (index) {
          if ($(this)[0].hash == '#'+targetSectionNextId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line').addClass('show-title');
          }
        });
        let targetSectionNextTop = targetSectionNext.offset().top;
        $('html').animate({scrollTop: targetSectionNextTop}, {duration: 650, easing: 'swing', queue: false});
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
        let targetSection = $(this)[0].target;
        let targetSectionId = targetSection.id;
        let navLink = $('.jsShowLine').find('a');
        $('.jsAddDelay').css({'transition-delay': '0s'});
        navLink.each(function (index) {
          if ($(this)[0].hash == '#'+targetSectionId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line').addClass('show-title');
          }
        });
        let targetSectionTop = targetSection.offsetTop;
        $('html').animate({scrollTop: targetSectionTop}, {duration: 650, easing: 'swing', queue: false});
      }
    });
  }

  let options = {};

  let observer = new IntersectionObserver(onEntry, options);

  let elements = document.querySelectorAll('section');

  for (let elm of elements) {
    observer.observe(elm);
  }


  //show line
  $('.jsShowLine').mouseenter(function () {
    lineShow();
    $(this).addClass('active-line').addClass('show-title');
    $(this).prevAll().addClass('active-line');
  });

  function reverseLine(elem) {
    if(!$(elem).prev().hasClass('show-title')) {


      // reverseLine()
    }
  }

  //hide line
  $('.jsShowLine').mouseleave(function () {
    reverseLine(this)
    // lineShowReverse(this);
    // $(this).removeClass('active-line').removeClass('show-title');
    // $(this).prevAll().removeClass('active-line');
  });
});
