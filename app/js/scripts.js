
 window.onload = function() {
    var prosBlock = document.querySelector('.pros').clientHeight;
    var personBlock = document.querySelector('.person').clientHeight;
    var secondBlock = document.querySelector('.second-block');

    if (prosBlock && personBlock) {
        secondBlock.style.minHeight = (prosBlock + personBlock ) + 'px';
    }

};

$( window ).resize(function() {
    var prosBlock = document.querySelector('.pros').clientHeight;
    var personBlock = document.querySelector('.person').clientHeight;
    var secondBlock = document.querySelector('.second-block');

    if (prosBlock && personBlock) {
        secondBlock.style.minHeight = (prosBlock + personBlock ) + 'px';
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