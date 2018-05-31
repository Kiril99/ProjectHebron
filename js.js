var input = document.getElementById('input');
var x = document.getElementById('X');
var arowR = document.getElementById('arowR');
var arowL = document.getElementById('arowL');
var block = document.getElementById('vid').clientWidth;



input.onclick = function() {
    document.getElementById('block').style.backgroundColor = '#f2f2f2';
    document.getElementById('seaImg').style.paddingLeft = '12px';
    x.style.display = 'block';
    document.getElementById('vid').style.display = 'none';
    document.getElementById('Next').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';

}

x.onclick = function() {
    document.getElementById('seaImg').style.paddingLeft = '0px';
    document.getElementById('block').style.backgroundColor = 'transparent';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('vid').style.display = 'flex';
    x.style.display = 'none';
    document.getElementById('Next').style.display = 'flex';

}
document.body.onclick = function() {
    if (event.target != input && event.target != arowR && event.target != arowL) {

        document.getElementById('seaImg').style.paddingLeft = '0';
        document.getElementById('block').style.backgroundColor = 'transparent';
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('vid').style.display = 'flex';
        document.getElementById('Next').style.display = 'flex';
         
        x.style.display = 'none';
    }
}

var left = 0;


arowR.onclick = function() {
    arowL.style.visibility = 'visible';
    var polosa = document.getElementById('polosa');
    left = left - block;
    var maxWigth = block * -2;
    if (left < maxWigth) {
        arowR.style.visibility = 'hidden';

    }
    polosa.style.left = left + 'px';
}
arowL.onclick = function() {
    arowR.style.visibility = 'visible';
    left = left + block;
    if(left == 0){
    	arowL.style.visibility = 'hidden';
    }
    polosa.style.left = left + 'px';
}