const bearGif = document.querySelector("img")

bearGif.addEventListener("mouseenter", () => {
    bearGif.src="https://media.tenor.com/x3tbINZF4K4AAAAC/milk-and-mocha-bear-together.gif"
})

bearGif.addEventListener("mouseleave", () => {
    bearGif.src="kiss.jpg"
})

const music = document.getElementById("bg-music");

// Function to play music and remove the event listeners so it doesn't keep resetting
function playMusic() {
    music.play().catch(error => {
        console.log("Playback prevented by browser until interaction:", error);
    });
    
    // Clean up listeners so they only run once
    document.removeEventListener("click", playMusic);
    document.removeEventListener("mouseenter", playMusic);
}

// Try to play the music as soon as she clicks anywhere or hovers over something
document.addEventListener("mouseenter", playMusic);