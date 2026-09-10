// PAGE 1 → PAGE 2

const beginButton = document.getElementById("beginButton");

if (beginButton) {

    beginButton.onclick = function () {

        window.location.href = "beginning.html";

    };

}


// PAGE 2 → PAGE 3

const continueButton = document.getElementById("continueButton");

if (continueButton) {

    continueButton.onclick = function () {

        window.location.href = "journey.html";

    };

}


// PAGE 3 → PAGE 4

const journeyNext = document.getElementById("journeyNext");

if (journeyNext) {

    journeyNext.onclick = function () {

        window.location.href = "memories.html";

    };

}


// PAGE 4 → PAGE 5

const memoriesNext = document.getElementById("memoriesNext");

if (memoriesNext) {

    memoriesNext.onclick = function () {

        window.location.href = "letter.html";

    };

}