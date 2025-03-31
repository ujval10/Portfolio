function Skill({source, alt, title}) {
    return  <img src={source} alt={alt} title={title}/>
}

export default Skill

// Scroll to the left
function scrollLeft() {
    const scrollContainer = document.querySelector('.skills-scroll');
    scrollContainer.scrollBy({ left: -150, behavior: 'smooth' });
}

// Scroll to the right
function scrollRight() {
    const scrollContainer = document.querySelector('.skills-scroll');
    scrollContainer.scrollBy({ left: 150, behavior: 'smooth' });
}
