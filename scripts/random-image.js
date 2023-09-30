document.addEventListener('DOMContentLoaded', function() {
    const artworkImage = document.getElementById("under-construction-artwork");

    var randomChance = Math.random();
    if (randomChance < 0.5) {
        artworkImage.src = "images/misc/coffee/coffee2.png";
    } else {
        artworkImage.src = "images/misc/coffee/coffee1.png";
    }
});
