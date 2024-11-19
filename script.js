
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const dog = document.querySelectorAll('.hidden, .front, .fade'); 
dog.forEach((el) => observer.observe(el));





const jumper = document.getElementById('jumper');


document.addEventListener("scroll", (event) => {
    let zero;
        
    requestAnimationFrame(firstFrame);
    function firstFrame(timestamp) {
        zero = timestamp;
        animate(timestamp);
    }
    function animate(timestamp) {
        if (window.scrollY === 0) {
            jumper.style.opacity = 0;
            jumper.style.cursor = 'default';
        } else {
            const value = (timestamp - zero) / 0.5;
            if (value < 1) {
                requestAnimationFrame((t) => animate(t));
            } else {
                jumper.style.opacity = 1;
                jumper.style.cursor = 'pointer';
            }
        } 
}});