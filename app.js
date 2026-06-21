const bearGif = document.querySelector("img")
const music = document.getElementById("bg-music");

bearGif.addEventListener("mouseenter", () => {
    bearGif.src="https://media.tenor.com/x3tbINZF4K4AAAAC/milk-and-mocha-bear-together.gif"
    music.muted = false;
})

bearGif.addEventListener("mouseleave", () => {
    bearGif.src="kiss.jpg"
})