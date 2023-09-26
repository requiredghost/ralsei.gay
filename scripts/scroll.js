const pages = document.querySelectorAll('.page');
let currentPage = 0;
let isScrolling = false;

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
    const duration = 800;

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