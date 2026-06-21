const bearGif = document.querySelector("img")
const music = document.getElementById("bg-music");
let musicStarted = false;

bearGif.addEventListener("mouseenter", () => {
    bearGif.src="https://media.tenor.com/x3tbINZF4K4AAAAC/milk-and-mocha-bear-together.gif"
    
    // Play music on hover
    if (!musicStarted) {
        music.play().catch(error => {
            console.log("Playback prevented by browser:", error);
        });
        musicStarted = true;
    }
})

bearGif.addEventListener("mouseleave", () => {
    bearGif.src="kiss.jpg"
})