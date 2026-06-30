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


// ===== FORM SUBMIT MESSAGE =====
document.getElementById("submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    alert("Thank you for your message! Kamoga Gerald will get back to you soon! 😊");
});