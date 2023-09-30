document.addEventListener('DOMContentLoaded', function() {
    const underConstruction = document.querySelector('.under-construction');
    underConstruction.style.opacity = 0;

    function fadeinStuff() {
        const fadeInInterval = setInterval(() => {
            underConstruction.style.opacity = parseFloat(underConstruction.style.opacity) + 0.05;
            if (parseFloat(underConstruction.style.opacity) >= 1) {
                clearInterval(fadeInInterval);
            }
        }, 50);
    }

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = 1;
        }, 500 * index);
    });

    fadeinStuff();

    socialIcons.forEach((icon) => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});
