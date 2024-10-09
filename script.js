const logo = document.getElementById('PICLOGO');

console.log("hello world")

console.log(logo.getAttribute("src"));

if (logo.matches(':hover')) {
    logo.src = "logoGIF.gif";
}

