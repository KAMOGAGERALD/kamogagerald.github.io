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

// ===== DARK / LIGHT MODE TOGGLE =====
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerText = "☀️ Light";
    } else {
        themeBtn.innerText = "🌙 Dark";
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
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = days[now.getDay()];
    document.getElementById("clock").innerText =
        "⏱️ " + day + " " + hours + ":" + minutes + ":" + seconds;
}
updateClock();
setInterval(updateClock, 1000);