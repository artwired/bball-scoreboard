let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

// Keeps track and highlights the leader
function theLeader() {
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("leader");
    guestScoreEl.classList.remove("leader");
  } else if (homeScore < guestScore) {
    guestScoreEl.classList.add("leader");
    homeScoreEl.classList.remove("leader");
  } else {
    homeScoreEl.classList.remove("leader");
    guestScoreEl.classList.remove("leader");
  }
}

// Home score board functionality
function add(name, points) {
  if (name === "home") {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
  } else if (name === "guest") {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
  }
  theLeader();
}

function reset() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
  homeScoreEl.classList.remove("leader");
  guestScoreEl.classList.remove("leader");
}
