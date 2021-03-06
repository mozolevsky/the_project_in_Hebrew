
 window.onload = function() {
    var prosBlock = document.querySelector('.pros');
    var personBlock = document.querySelector('.person');
    var secondBlock = document.querySelector('.second-block');

    if (prosBlock && personBlock) {
        secondBlock.style.minHeight = (prosBlock.clientHeight + personBlock.clientHeight) + 'px';
    }

    var tabsList = document.querySelector('.resp-tabs-list');
    var tabsContainer = document.querySelector('.resp-tabs-container');
    console.log(tabsContainer.clientHeight);


     if (tabsContainer && tabsList) {
         tabsList.style.cssText = 'height:' + (tabsContainer.clientHeight + 50) + 'px' ;

     }

};

$( window ).resize(function() {
    var prosBlock = document.querySelector('.pros');
    var personBlock = document.querySelector('.person');
    var secondBlock = document.querySelector('.second-block');

    if (prosBlock && personBlock) {
        secondBlock.style.minHeight = (prosBlock.clientHeight + personBlock.clientHeight) + 'px';
    }

    var tabsContainer = document.querySelector('.resp-tabs-container');
    var tabsList = document.querySelector('.resp-tabs-list');

    if (tabsContainer && tabsList) {
        tabsList.style.height = tabsContainer.clientHeight + 'px';
    }

});

// accordion

 function toggleIcon(e) {
     $(e.target)
         .prev('.panel-heading')
         .find(".accordion__marker")
         .toggleClass('accordion__close accordion__open');
 }
 $('.panel-group').on('hidden.bs.collapse', toggleIcon);
 $('.panel-group').on('shown.bs.collapse', toggleIcon);


 // slider

 var reviewsSlider = new Swiper('.reviews__slider', {
     pagination: '.swiper-pagination',
     paginationClickable: true,
     nextButton: '.reviews__right-arrow',
     prevButton: '.reviews__left-arrow',
     spaceBetween: 30
 });

 // video

 /* video */

 document.body.addEventListener('click', function (e) {
     var target = e.target;

     if (target.className == 'videocover' || target.parentNode.className == 'videocover') {
         var video = target.parentElement.parentElement.querySelector('.video-container__video');
         var cover = target.parentElement.parentElement.querySelector('.videocover');

         if (video.getAttribute("data-control") !== null) {
             console.log('Тут нужно скрыть контролы');
         } else {
             video.setAttribute("controls", true);
         }
         video.play();
         cover.setAttribute("style", 'visibility: hidden');
     }
 });