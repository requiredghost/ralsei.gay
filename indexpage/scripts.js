document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    const terminalText = document.getElementById("terminal-text");
    const terminalCursor = document.getElementById("terminal-cursor");
    const terminalInput = document.getElementById("terminal-input");
  
    const textToType = "This is a work in progress right now. There's no functionality yet for anything at this moment. Stay tuned!";
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

    function showError() {
      terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
      terminalText.innerHTML += "<br>Invalid command. Please try again.";
      terminalInput.value = "";
      terminalInput.blur();
      document.getElementById("input-prefix").style.display = "none";
      setTimeout(() => {
        showInputCursor();
      }, 1000);
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
            */
          case "tailwag":
            window.location.href = "tailwag.html";
            break;
        case "help":
            terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
            terminalText.innerHTML += "<br>uhh";
            break;
            default:
              if (command.startsWith("images/")) {
                const imageName = command.slice(7); // Get the image name after 'images/'
                if (imageName.length > 0) {
                  window.location.href = command;
                } else {
                  showError();
                }
              } else if (command.startsWith("audio/")) {
                const audioName = command.slice(6); // Get the audio name after 'audio/'
                if (audioName.length > 0) {
                  window.location.href = command;
                } else {
                  showError();
                }
              } else {
                showError();
              }
              break;
          }
        }
      });
      
    });
      
  
  