const logo = document.getElementById('PICLOGO');

logo.addEventListener("mouseover", (event) => {
    logo.src="images/logoGIF.gif";

    setTimeout(() => {
        logo.src="images/LOGO.jpg";
    }, 4000)
});


