document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.under-construction-artwork-container');
    const goatEmojisContainer = document.querySelector('.goat-emojis');
    const logo = document.getElementById('under-construction-artwork');

    var artworkImage = document.getElementById("under-construction-artwork");

    logoContainer.style.opacity = 1;

    var randomChance = Math.random();
    if (randomChance < 0.5) {
      artworkImage.src = "images/misc/coffee/coffee2.png";
    } else {
      artworkImage.src = "images/misc/coffee/coffee1.png";
    }

    logoContainer.addEventListener('click', function(event) {
        const x = event.clientX;
        const y = event.clientY;
    
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
    });

    const underConstruction = document.querySelector('.under-construction');
    underConstruction.style.opacity = 0;

    function fadeInUnderConstructionText() {
        const fadeInInterval = setInterval(() => {
            underConstruction.style.opacity = parseFloat(underConstruction.style.opacity) + 0.05;
            if (parseFloat(underConstruction.style.opacity) >= 1) {
                clearInterval(fadeInInterval);
            }
        }, 50);
    }

    fadeInUnderConstructionText();

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = 1;
        }, 500 * index);
    });

    socialIcons.forEach((icon) => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });

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