// ===== CHANGE TITLE COLOR =====
document.getElementById("change-color-btn").addEventListener("click", function() {
    const colors = ["#ee0a0a", "#00aaff", "#00ff88", "#ffaa00", "#ff00ff"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("main-title").style.color = random;
});

// ===== SAY HELLO =====
document.getElementById("show-message-btn").addEventListener("click", function() {
    alert("Hello! Welcome to Kamoga Gerald's Website! 👋🔥");
});

// ===== HIDE / SHOW PHOTO =====
document.getElementById("hide-show-btn").addEventListener("click", function() {
    const photo = document.querySelector(".section img");
    if (photo.style.display === "none") {
        photo.style.display = "block";
    } else {
        photo.style.display = "none";
    }
});

// ===== FORM SUBMIT =====
document.getElementById("submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    alert("Thank you for your message! Kamoga Gerald will get back to you soon! 😊");
});

// ===== DARK / LIGHT MODE + LOCAL STORAGE =====
const themeBtn = document.getElementById("theme-toggle");

// Check saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.innerText = "☀️ Light";
}

// Toggle theme and save to local storage
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerText = "☀️ Light";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.innerText = "🌙 Dark";
        localStorage.setItem("theme", "dark");
    }
});

// ===== ANIMATED PROGRESS BARS =====
const progressBars = document.querySelectorAll(".progress");
progressBars.forEach(function(bar) {
    const targetWidth = bar.getAttribute("data-width");
    setTimeout(function() {
        bar.style.width = targetWidth + "%";
    }, 500);
});

// ===== LIVE CLOCK =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const days = ["Sunday","Monday","Tuesday","Wednesday",
                  "Thursday","Friday","Saturday"];
    const day = days[now.getDay()];
    document.getElementById("clock").innerText =
        "⏱️ " + day + " " + hours + ":" + minutes + ":" + seconds;
}
updateClock();
setInterval(updateClock, 1000);

// ===== VISIT COUNTER =====
let visits = localStorage.getItem("visits");
if (visits === null) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}
localStorage.setItem("visits", visits);

// ===== WELCOME BANNER =====
let visitorName = localStorage.getItem("visitorName");
const welcomeText = document.getElementById("welcome-text");
const nameInputArea = document.getElementById("name-input-area");

if (visitorName) {
    // Name already saved — show welcome message
    nameInputArea.style.display = "none";
    welcomeText.style.display = "block";
    if (visits === 1) {
        welcomeText.innerText =
            "👋 Welcome " + visitorName + "! Thanks for visiting!";
    } else {
        welcomeText.innerText =
            "🔥 Welcome back " + visitorName + "! Visit number " + visits + "!";
    }
} else {
    // No name saved — show input
    nameInputArea.style.display = "flex";
    welcomeText.style.display = "none";
}

// Save name when button clicked
document.getElementById("save-name-btn").addEventListener("click", function() {
    const inputVal = document.getElementById("visitor-name-input").value;
    if (inputVal.trim() !== "") {
        localStorage.setItem("visitorName", inputVal);
        nameInputArea.style.display = "none";
        welcomeText.style.display = "block";
        welcomeText.innerText = "👋 Welcome " + inputVal + "! Thanks for visiting!";
    }
});

// ===== CLOSE BANNER =====
document.getElementById("close-banner").addEventListener("click", function() {
    document.getElementById("welcome-banner").style.display = "none";
});

const welcomeText = document.getElementById("welcome-text");
if (visitorName) {
    if (visits === 1) {
        welcomeText.innerText =
            "👋 Welcome " + visitorName + "! Thanks for visiting for the first time!";
    } else {
        welcomeText.innerText =
            "🔥 Welcome back " + visitorName + "! This is your visit number " + visits + "!";
    }
}

// ===== CLOSE BANNER =====
document.getElementById("close-banner").addEventListener("click", function() {
    document.getElementById("welcome-banner").style.display = "none";
});