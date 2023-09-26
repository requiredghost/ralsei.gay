const introText = ["HI. I'M RALSEI.", "I DO STUFF."];
let currentIndex = 0;
const introTextElement = document.getElementById("introText");

function updateIntroText() {
  introTextElement.textContent = introText[currentIndex];
  currentIndex = (currentIndex + 1) % introText.length;
}

setInterval(() => {
  introTextElement.style.animation = "fadeout 1s ease-in-out forwards";
  setTimeout(() => {
    updateIntroText();
    introTextElement.style.animation = "fadein 1s ease-in-out forwards";
  }, 1000);
}, 5000);

updateIntroText();
