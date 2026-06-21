const bearGif = document.querySelector("img")
const music = document.getElementById("bg-music");
let musicStarted = false;

bearGif.addEventListener("mouseenter", () => {
    bearGif.src="https://media.tenor.com/x3tbINZF4K4AAAAC/milk-and-mocha-bear-together.gif"
    
    // Reset to beginning and play
    music.currentTime = 0;
    music.muted = false;
    music.play().catch(error => console.log("Play failed:", error));
    musicStarted = true;
})

bearGif.addEventListener("mouseleave", () => {
    bearGif.src="kiss.jpg"
})