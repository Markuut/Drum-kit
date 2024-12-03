document.querySelectorAll("audio").forEach(audio => {
    audio.load();
});

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.key[data-key="${event.code}"]`);

    if (!audio) return; 

    audio.currentTime = 0; 
    audio.play();
    key.classList.add("playing");
}

function removePlayingClass(event) {
    const key = document.querySelector(`.key[data-key="${event.code}"]`);
    if (!key) return;
    key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removePlayingClass);