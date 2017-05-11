console.log('Loaded!');
// Change the value of main text.

var el = document.getElementById('mt');
el.innerHTML = 'MODI_FIED';

//move image on click
var im = document.getElementById('m') ;
var marginLeft = 0;

function movRight() {
    marginLeft += 1;
    im.style.marginLeft = marginLeft + 'px' ;
}

im.onclick = function() {
    var interval = setInterval(movRight, 50);
};

//names
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to the server and send the name
    //Capture the list of names and render it as a list
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};