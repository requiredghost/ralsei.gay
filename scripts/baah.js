document.addEventListener('DOMContentLoaded', function() {
const artContainer = document.querySelector('.introduction-artwork-container');
const art = document.getElementById('introduction-artwork');

art.addEventListener('click', playRandomSound);


function playRandomSound() {
    const sounds = [
        'sound1.mp3',
        'sound2.mp3',
        'sound3.mp3'
    ];
  
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio('sounds/' + sounds[randomIndex]);
    audio.play();
  }
})