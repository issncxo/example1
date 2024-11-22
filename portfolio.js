// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    // Add the "scrolled" class if the page is scrolled beyond a certain point
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

  