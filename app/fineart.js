const collage = document.getElementById('collage');
const metamorphosis = document.getElementById('metamorphosis');
const bubble = document.getElementById('bubble');
const shuvashis = document.getElementById('shuvashis');
const contour = document.getElementById('contour');

const bigcollage = document.getElementById('bigcollage');
const bigmetamorphosis = document.getElementById('bigmetamorphosis');
const bigbubble = document.getElementById('bigbubble');
const bigshuvashis = document.getElementById('bigshuvashis');
const bigcontour = document.getElementById('bigcontour');

var box = document.getElementById('bigcollage');
box.getElementsByClassName('portrait')[0].hidden = false;

function showcase(idname) {
  box.getElementsByClassName('portrait')[0].hidden = true;
  box = idname;
  box.getElementsByClassName('portrait')[0].hidden = false;
}

collage.addEventListener('click', function(){showcase(bigcollage)});
metamorphosis.addEventListener('click', function(){showcase(bigmetamorphosis)});
bubble.addEventListener('click', function(){showcase(bigbubble)});
shuvashis.addEventListener('click', function(){showcase(bigshuvashis)});
contour.addEventListener('click', function(){showcase(bigcontour)});

// _______

const alicecard = document.getElementById('alicecard');
const alicepers = document.getElementById('alicepers');
const chess = document.getElementById('chess');
const patan = document.getElementById('patan');
const stuck = document.getElementById('stuck');
const toy = document.getElementById('toy');

const bigalicecard = document.getElementById('bigalicecard');
const bigalicepers = document.getElementById('bigalicepers');
const bigchess = document.getElementById('bigchess');
const bigpatan = document.getElementById('bigpatan');
const bigstuck = document.getElementById('bigstuck');
const bigtoy = document.getElementById('bigtoy');


var box2 = document.getElementById('bigpatan');
box2.getElementsByClassName('portrait')[0].hidden = false;

function showcase2(idname) {
  box2.getElementsByClassName('portrait')[0].hidden = true;
  box2 = idname;
  box2.getElementsByClassName('portrait')[0].hidden = false;
}

alicecard.addEventListener('click', function(){showcase2(bigalicecard)});
alicepers.addEventListener('click', function(){showcase2(bigalicepers)});
chess.addEventListener('click', function(){showcase2(bigchess)});
patan.addEventListener('click', function(){showcase2(bigpatan)});
stuck.addEventListener('click', function(){showcase2(bigstuck)});
toy.addEventListener('click', function(){showcase2(bigtoy)});










  
// const soundButtons = document.querySelectorAll('.soundtrack');

// const soundStopButton = document.getElementById('btn-stop-sounds');
// const speakers = document.getElementById('speakers')

// const playSounds = false;

// soundButtons.forEach(dog => {
//     const sound = dog.dataset.sound;
//     dog.addEventListener('click', () => {
//         speakers.src=`sounds/${sound}.mp3`;
//         if (playSounds === true) speakers.play();        speakers.play();
//     })    
// })

// soundStopButton.addEventListener('click', () => {

// })