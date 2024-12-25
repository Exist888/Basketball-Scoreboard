let homeScore = 0;
let guestScore = 0;

let homeScoreText = document.getElementById("home-score");
let guestScoreText = document.getElementById("guest-score");


function homeAdd1() {
    homeScore += 1;
    homeScoreText.textContent = homeScore;
}

function homeAdd2() {
    homeScore += 2;
    homeScoreText.textContent = homeScore;
}

function homeAdd3() {
    homeScore += 3;
    homeScoreText.textContent = homeScore;
}

function guestAdd1() {
    guestScore += 1;
    guestScoreText.textContent = guestScore;
}

function guestAdd2() {
    guestScore += 2;
    guestScoreText.textContent = guestScore;
}

function guestAdd3() {
    guestScore += 3;
    guestScoreText.textContent = guestScore;
}

function startNewGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreText.textContent = homeScore;
    guestScoreText.textContent = guestScore;
}