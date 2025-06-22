// Function to toggle hamburger menu
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
// Continuous Scrolling
const skillsScroll = document.getElementById('skillsScroll');

let scrollAmount = 1;
function autoScroll() {
    skillsScroll.scrollLeft += scrollAmount;
    // Loop back when reaching the end
    if (skillsScroll.scrollLeft >= skillsScroll.scrollWidth - skillsScroll.clientWidth) {
        skillsScroll.scrollLeft = 0;
    }
}







