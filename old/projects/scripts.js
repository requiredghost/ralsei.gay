document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
    const projectImage = document.getElementById("project-image");
    const projectDescription = document.getElementById("project-description");
    const modal = document.getElementById("image-modal");
    const enlargedImage = document.getElementById("enlarged-image");
  
    function fadeOutLoadingScreen() {
      loadingScreen.classList.add("fade-out");
      content.style.display = "block";
    }
  
    function openImageModal(imageSrc, captionText) {
      modal.style.display = "block";
      enlargedImage.src = imageSrc;
      imageCaption.innerHTML = captionText;
    }
  
    function closeImageModal() {
      modal.style.display = "none";
    }
  
    function showProjectDetails(project) {
      const image = project.getAttribute("data-image");
      const description = project.getAttribute("data-description");
      const downloadLink = project.getAttribute("data-download");
  
      projectImage.src = image;
      projectDescription.innerHTML = `
        ${description}
        <br><br>
        <a href="${downloadLink}" target="_blank">Download Project</a>
      `;
    }
  
    // Add a click event listener for the project images
    projectImage.style.cursor = "pointer";
    projectImage.addEventListener("click", () => {
      const imageSrc = projectImage.getAttribute("src");
      const captionText = projectImage.getAttribute("alt");
      openImageModal(imageSrc, captionText);
    });
  
    // Add a click event listener for the close button
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeImageModal);
  
    // Add a click event listener for the modal background
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeImageModal();
      }
    });
  
    setTimeout(fadeOutLoadingScreen, 2000);
  
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      project.addEventListener("mouseover", () => {
        showProjectDetails(project);
        projectImage.classList.add("project-hover");
      });
    });
  });
