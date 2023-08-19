var typed = new Typed('#element', {
    strings: ['Python &amp; Front-End Developer'],
    typeSpeed: 40,
});
document.getElementById("cross").style.display = "none"
document.getElementById("hamburger").onclick = function () {
    document.getElementById('ham-menu').style.display = "flex"
    document.getElementById('hamburger').style.display = "none"
    document.getElementById('cross').style.display = "flex"
}
document.getElementById("cross").onclick = function () {
    document.getElementById('ham-menu').style.display = "none"
    document.getElementById('hamburger').style.display = "flex"
    document.getElementById('cross').style.display = "none"
}