document.addEventListener('DOMContentLoaded', function() {
    const goatEmojisContainer = document.querySelector('.goat-emojis');

    function createGoatEmoji(x, y) {
        const goatEmoji = document.createElement('div');
        goatEmoji.className = 'goat-emoji';
        goatEmoji.innerHTML = '🐐';

        const xOffset = Math.random() * window.innerWidth;
        goatEmoji.style.left = xOffset + 'px';
        goatEmoji.style.top = y + 'px';

        goatEmojisContainer.appendChild(goatEmoji);

        goatEmoji.addEventListener('animationend', function() {
            goatEmoji.remove();
        });

        playRandomSound();
    }

    document.querySelector('.under-construction-artwork-container').addEventListener('click', function(event) {
        const x = event.clientX;
        const y = event.clientY;
        createGoatEmoji(x, y);
    });

     //sounds

    const sounds = [
        'goat1.mp3',
        'goat2.mp3',
        'goat3.mp3',
        'goat4.mp3',
        'goat5.mp3',
        'goat6.mp3',
        'goat7.mp3',
    ];
    const audioElements = sounds.map(sound => {
        const audio = new Audio('sounds/misc/goat/' + sound);
        audio.preload = 'auto';
        return audio;
    });

    function playRandomSound() {
        const randomIndex = Math.floor(Math.random() * audioElements.length);
        audioElements[randomIndex].play();
    }
});
