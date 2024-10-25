/**const logo = document.getElementById('PICLOGO');

logo.addEventListener("mouseover", (event) => {
    logo.src="images/logoGIF.gif";

    setTimeout(() => {
        logo.src="images/LOGO.jpg";
    }, 4000)
});*/

console.log(1);



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const dog = document.querySelectorAll('.hidden'); 
dog.forEach((el) => observer.observe(el));