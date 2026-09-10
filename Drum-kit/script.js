window.addEventListener("keydown", function (e) {

    const audio = document.querySelector(
        `audio[data-key="${e.keyCode}"]`
    );

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

});


// Mouse click

const keys = document.querySelectorAll(".key");

keys.forEach(function (key) {

    key.addEventListener("click", function () {

        const keyCode = key.getAttribute("data-key");

        const audio = document.querySelector(
            `audio[data-key="${keyCode}"]`
        );

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

    });

});