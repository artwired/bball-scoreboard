
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function theLeader() {
    if(homeScore > guestScore) {
        homeScoreEl.classList.add("leader")
        guestScoreEl.classList.remove("leader")
    } else if(homeScore < guestScore){
        guestScoreEl.classList.add("leader")
        homeScoreEl.classList.remove("leader")
    } else {
        homeScoreEl.classList.remove("leader")
        guestScoreEl.classList.remove("leader")
    }
}

// Home score board functionality
function homeAddOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    theLeader()
}
function homeAddTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    theLeader()
}
function homeAddThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    theLeader()
}

// Guest score board functionality
function guestAddOne() {
     guestScore += 1
     guestScoreEl.textContent = guestScore
     theLeader()
}
function guestAddTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    theLeader()
}
function guestAddThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    theLeader()
}
