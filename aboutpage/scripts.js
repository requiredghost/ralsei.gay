document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
  
    function fadeOutLoadingScreen() {
      loadingScreen.classList.add("fade-out");
      content.style.display = "block";
    }

  
    setTimeout(fadeOutLoadingScreen, 2000);

  
});