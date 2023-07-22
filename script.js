document.addEventListener('DOMContentLoaded', function() {
  const logoContainer = document.querySelector('.logo-container');
  const logo = document.getElementById('logo');

  logoContainer.style.opacity = 1;

  logo.addEventListener('click', playRandomSound);
  logo.addEventListener('mouseover', () => logo.style.transform = 'scale(1.1)');
  logo.addEventListener('mouseout', () => logo.style.transform = 'scale(1)');

  // Function to fade in the "Under Construction" text
  const underConstruction = document.querySelector('.under-construction');
  underConstruction.style.opacity = 0; // Initially set to 0

  function fadeInUnderConstructionText() {
      const fadeInInterval = setInterval(() => {
          underConstruction.style.opacity = parseFloat(underConstruction.style.opacity) + 0.05;
          if (parseFloat(underConstruction.style.opacity) >= 1) {
              clearInterval(fadeInInterval);
          }
      }, 50);
  }

  fadeInUnderConstructionText();

  // Fade in the social media icons one after the other
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach((icon, index) => {
      setTimeout(() => {
          icon.style.opacity = 1;
      }, 500 * index); // Adjust the delay here to control the fading speed
  });

  // Add animation for the social icons when hovered
  socialIcons.forEach((icon) => {
      icon.addEventListener('mouseover', () => {
          icon.style.transform = 'scale(1.1)'; // Zoom effect
      });
      icon.addEventListener('mouseout', () => {
          icon.style.transform = 'scale(1)'; // Restore original size
      });
  });
});

function playRandomSound() {
  const sounds = [
      'sound1.mp3',
      'sound2.mp3',
      'sound3.mp3'
  ];

  const randomIndex = Math.floor(Math.random() * sounds.length);
  const audio = new Audio('sounds/' + sounds[randomIndex]);
  audio.play();

  // Add animation for the click event (move slightly)
  this.style.transform = 'translateY(-5px)';
  setTimeout(() => {
      this.style.transform = 'translateY(0)';
  }, 100);
}