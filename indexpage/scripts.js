document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    const terminalText = document.getElementById("terminal-text");
    const terminalCursor = document.getElementById("terminal-cursor");
    const terminalInput = document.getElementById("terminal-input");
  
    const textToType = "Welcome to Ralsei's homepage! This is the terminal page, write 'help' for commands if you are lost or write `changelog` to see the current changes.";
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
          case "tailwag":
            window.location.href = "tailwag.html";
            break;
          case "help":
            terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
            terminalText.innerHTML += "<br>help: Gives you an list of commands you can use for the terminal.<br>changelog: See the current changes of the website.<br>tailwag: Takes you to tailwag. (Sound warning!)<br>echo: Repeats your input.<br>images/: Takes you to whatever images is hosted on this site.<br>audio/: Takes you to whatever audio is hosted on this site.";
            break;
            case "changelog":
              terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
              terminalText.innerHTML += "<br>Changelog v2.1.1<br>- Added GitHub repository link to the navbar.<br>-Added `echo` command.<br>- Added welcome splash message.<br>- Added functionality to `help` command.<br>To add:<br>- About and Projects pages.";
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
            } else if (command.startsWith("echo ")) {
              const message = command.slice(5); // Get the message after 'echo '
              terminalText.innerHTML += "<br>&gt; " + terminalInput.value;
              terminalText.innerHTML += "<br>" + message;
            } else {
              showError();
            }
            break;
        }
  
        terminalInput.value = "";
        terminalInput.blur();
        document.getElementById("input-prefix").style.display = "none";
        setTimeout(() => {
          showInputCursor();
        }, 1000);
      }
    });
  });