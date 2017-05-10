console.log('Loaded!');
// Change the value of main text.

var el = document.getElementById('mt');
el.innerHTML = 'MODI_FIED';

//move image on click
var im = document.getElementById('m') ;
var marginLeft = 0;

function movRight() {
    marginLeft += 10;
    im.style.marginLeft = marginLeft + 'px' ;
}

im.onclick = function() {
    var interval = setInterval(movRight, 50);
};