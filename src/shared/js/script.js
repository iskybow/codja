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

  // scroll
  $('body section, body aside').bind('mousewheel', function (e) {
    e.preventDefault();

    if (e.originalEvent.wheelDelta >= 0) {
      let targetSectionPrev = $(this).prev()[0].tagName;
      if (targetSectionPrev == 'SECTION') {


        $('.jsShowLine').removeClass('active-line show-title current-elem');
        let targetSectionPrev = $(this).prev();
        let targetSectionPrevId = targetSectionPrev.attr('id');
        let navLink = $('.jsShowLine');
        $('.jsAddDelay').css({'transition-delay': '0s'});
        navLink.each(function (index) {
          if ($(this).attr('name') == targetSectionPrevId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line show-title current-elem');
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
        $('.jsShowLine').removeClass('active-line show-title current-elem');
        let targetSectionNext = $(this).next();
        let targetSectionNextId = targetSectionNext.attr('id');
        let navLink = $('.jsShowLine');
        $('.jsAddDelay').css({'transition-delay': '0s'});
        navLink.each(function (index) {
          if ($(this).attr('name') == targetSectionNextId) {
            $(this).closest('li').prevAll().addClass('active-line');
            $(this).closest('li').addClass('active-line show-title current-elem');
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
  let clickFlag = false;
  function onEntry(entry) {
      $(entry).each(function () {
        if ($(this)[0].intersectionRatio > 0) {
          $(this)[0].target.classList.add('visible');
          $('.jsShowLine').removeClass('active-line show-title current-elem');
          let targetSection = $(this)[0].target;
          let targetSectionId = targetSection.id;
          let navLink = $('.jsShowLine');
          $('.jsAddDelay').css({'transition-delay': '0s'});
          navLink.each(function (index) {
            if ($(this).attr('name') == targetSectionId) {
              $(this).closest('li').prevAll().addClass('active-line');
              $(this).closest('li').addClass('active-line show-title current-elem');
            }
          });
          if (clickFlag != true) {
          let targetSectionTop = targetSection.offsetTop;
          $('html').animate({scrollTop: targetSectionTop}, {duration: 650, easing: 'swing', queue: false});
            clickFlag = false;
          }
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
    $(this).addClass('active-line show-title');
    $(this).prevAll().addClass('active-line');
  });


  //line hide reverse
  function lineShowReverse(self) {
    let allLine = $(self).prevAll('.jsShowLine');
    let allLineNext = $(self).nextAll('.jsShowLine');
    let fl = false;
    $(allLineNext).each(function (index) {
      if ($(this).hasClass('show-title')) {
        fl = true;
        return false;
      }
    });
    if (!fl) {
      $(self).find('.jsAddDelay').css({'transition-delay': '0s'});
      $(allLine).each(function (index) {
        let delay = (index + 1) * 0.2;
        $(this).find('.jsAddDelay').css({'transition-delay': delay + 's'});
      });
      reverseLine(self);
    } else {
      $(self).removeClass('show-title')
    }
  }

  //line hide reverse
  function reverseLine(elem) {
    if (!$(elem).hasClass('current-elem')) {
      $(elem).removeClass('active-line show-title');
      reverseLine($(elem).prev())
    }
  }

  //hide line
  $('.jsShowLine').mouseleave(function () {
    lineShowReverse(this);
  });

  //click nav
  $('.jsAnimTo').click(function () {
    clickFlag = true;
    let linkHash = $(this).attr('name');
    let linkSection = $('#' + linkHash);
    let linkSectionPosition = $(linkSection)[0].offsetTop;
    $('html').animate({scrollTop: linkSectionPosition}, {duration: 650, easing: 'swing', queue: false});
  });

  //portfolio slider
  //next slide
  $('.next').click(function(){
    let prependList = function() {
      if( $('.slider__slide').hasClass('activeNow') ) {
        let $slicedCard = $('.slider__slide').slice(0, 1).removeClass('transformThis').removeClass('activeNow');
        $('.slider__list').append($slicedCard);
      }
    };
    $('.slider__slide').first().removeClass('transformPrev').addClass('transformThis').next().addClass('activeNow');
    setTimeout(function(){prependList(); }, 300);
  });

  //prev slide
  let lastCard = $(".slider__slide").length - 1;
  $('.prev').click(function() {
    let appendToList = function() {
      if( $('.slider__slide').hasClass('activeNow') ) {
        let $slicedCard = $('.slider__slide').slice(lastCard).addClass('transformPrev');
        $('.slider__list').prepend($slicedCard);
      }};

    $('.slider__slide').removeClass('transformPrev').first().addClass('activeNow').nextAll().removeClass('activeNow');
    setTimeout(function(){appendToList();}, 150);
  });

  //dots slider
  function dotsSlider() {
    let allSlide = $('.slider__slide');
    let dotsListBlock = $('.slider__dots')[0];
    allSlide.each(function (index) {
      let html = '<li class="jsDotsSlide" id="'+index+'"><button></button></li>';
      $(dotsListBlock).append(html);
    });
    $('.slider__dots li').first().addClass('dot-active');
  }
  dotsSlider();

  $('.jsDotsSlide').click(function () {
    let indexSlide = $(this).attr('id');
    let currentIndex = $('.dot-active').attr('id');
    if (indexSlide > currentIndex) {
      for (let i = 0; i < indexSlide; i++) {
        $('.next').click();
        $('.jsDotsSlide').removeClass('dot-active');
        $(this).addClass('dot-active');
      }
    } else {

      for (let i = currentIndex; i > indexSlide; i--) {
        $('.prev').click();
        $('.jsDotsSlide').removeClass('dot-active');
        $(this).addClass('dot-active');
      }
    }

    console.log(indexSlide);
  });

});
