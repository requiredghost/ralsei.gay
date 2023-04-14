document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    const terminalText = document.getElementById("terminal-text");
    const terminalCursor = document.getElementById("terminal-cursor");
    const terminalInput = document.getElementById("terminal-input");
  
    const textToType = "This is a work in progress right now. There's no functionality yet for anything right now. Stay tuned!";
    let index = 0;
  
    function fadeOutLoadingScreen() {
      loadingScreen.classList.add("fade-out");
      content.style.display = "block";
    }
  
    function typeText() {
      if (index < textToType.length) {
        terminalText.textContent += textToType[index];
        index++;
        setTimeout(typeText, 100);
      } else {
        terminalCursor.style.display = "none"; // Hide the cursor
        showInputCursor();
      }
    }
  
    function showInputCursor() {
      document.getElementById("input-prefix").style.display = "inline";
      terminalInput.style.display = "inline";
      terminalInput.focus();
    }
  
    setTimeout(fadeOutLoadingScreen, 2000);
    typeText();
  
    terminalInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const command = terminalInput.value;
  
        switch (command) {
            /*
          case "1":
            window.location.href = "page1.html";
            break;
          case "2":
            window.location.href = "page2.html";
            break;
          case "3":
            window.location.href = "page3.html";
            break;
            */
        case "help":
            terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
            terminalText.innerHTML += "<br>uhh";
            break;
          default:
            terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
            terminalText.innerHTML += "<br>Invalid command. Please try again.";
            terminalInput.value = "";
            terminalInput.blur();
            document.getElementById("input-prefix").style.display = "none";
            setTimeout(() => {
              showInputCursor();
            }, 1000);
            break;
        }
      }
    });
  });
  
  