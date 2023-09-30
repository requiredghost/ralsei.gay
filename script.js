document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.under-construction-artwork-container');
    const logo = document.getElementById('under-construction-artwork');

    logoContainer.style.opacity = 1;

    logo.addEventListener('click', playRandomSound);

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
        'sound1.mp3',
        'sound2.mp3',
        'sound3.mp3',
        'sound4.mp3',
        'sound5.mp3',
        'sound6.mp3',
        'sound7.mp3',
    ];
    const audioElements = sounds.map(sound => {
        const audio = new Audio('sounds/misc/' + sound);
        audio.preload = 'auto';
        return audio;
    });

    function playRandomSound() {
        const randomIndex = Math.floor(Math.random() * audioElements.length);
        audioElements[randomIndex].play();
    }
});
