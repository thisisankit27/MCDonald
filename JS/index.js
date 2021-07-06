for (var i = 0; i < 4; i++) {
    document.querySelectorAll(".showcase-img-link")[i].addEventListener("click", function () {
        document.querySelector(".showcase-img").classList.toggle("mcd-char-move");
    });
}

function imageChange(number) {
    document.querySelector(".showcase-img img").setAttribute("src", "IMAGES/MCDonalds/char-" + number + ".png");
}