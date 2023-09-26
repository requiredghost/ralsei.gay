const pages = document.querySelectorAll('.page');
let currentPage = 0;
let isScrolling = false;

// Function to create the page indicators
function createPageIndicators() {
  const pageIndicatorContainer = document.createElement('div');
  pageIndicatorContainer.classList.add('page-indicator');
  
  for (let i = 0; i < pages.length; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Add a click event listener to jump to the respective page
    circle.addEventListener('click', () => {
      currentPage = i;
      scrollToCurrentPage();
    });
    
    pageIndicatorContainer.appendChild(circle);
  }
  
  document.body.appendChild(pageIndicatorContainer);
}

createPageIndicators();

// Function to update the page indicators
function updatePageIndicators() {
  const circles = document.querySelectorAll('.circle');
  
  circles.forEach((circle, index) => {
    if (index === currentPage) {
      circle.classList.add('filled');
    } else {
      circle.classList.remove('filled');
    }
  });
}

function scrollToNextPage() {
  if (currentPage < pages.length - 1 && !isScrolling) {
    isScrolling = true;
    currentPage++;
    scrollToCurrentPage();
  }
}

function scrollToPreviousPage() {
  if (currentPage > 0 && !isScrolling) {
    isScrolling = true;
    currentPage--;
    scrollToCurrentPage();
  }
}

function scrollToCurrentPage() {
  const scrollTo = currentPage * window.innerHeight;
  const start = window.scrollY;
  const end = scrollTo;
  const duration = 650;

  let startTime;

  function animate(time) {
    if (!startTime) {
      startTime = time;
    }

    const progress = (time - startTime) / duration;

    if (progress < 1) {
      window.scrollTo(0, start + (end - start) * progress);
      requestAnimationFrame(animate);
    } else {
      window.scrollTo(0, end);
      isScrolling = false;
    }
  }

  requestAnimationFrame(animate);
  updatePageIndicators(); // Update page indicators when scrolling
}

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    scrollToNextPage();
  } else if (e.deltaY < 0) {
    scrollToPreviousPage();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    scrollToNextPage();
  } else if (e.key === 'ArrowUp') {
    scrollToPreviousPage();
  }
});

scrollToCurrentPage();