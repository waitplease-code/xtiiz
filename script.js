const logo = document.getElementById('PICLOGO');

const dog = document.getElementById('dog');

dog.style.color = "red";

logo.addEventListener("mouseover", (event) => {
    logo.src="logoGIF.gif";

    setTimeout(() => {
        logo.src="LOGO.jpg";
    }, 4000)
});


