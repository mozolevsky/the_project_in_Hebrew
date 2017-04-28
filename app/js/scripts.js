
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