const navSlide = () => {

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
});
}

navSlide();




const soundButtons = document.querySelectorAll('.soundtrack');

const soundStopButton = document.getElementById('btn-stop-sounds');
const speakers = document.getElementById('speakers')

const playSounds = false;

soundButtons.forEach(dog => {
    const sound = dog.dataset.sound;
    dog.addEventListener('click', () => {
        speakers.src=`sounds/${sound}.mp3`;
        if (playSounds === true) speakers.play();        speakers.play();
    })    
})

soundStopButton.addEventListener('click', () => {

})