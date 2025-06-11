// Toggle Theme
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    const icon = document.getElementById("themeToggle");
    if (document.body.classList.contains("light-mode")) {
        icon.textContent = "🌙";
    } else {
        icon.textContent = "🌞";
    }
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    this.style.display = "none";
    document.getElementById("successMessage").style.display = "block";

    // Clear form
    this.reset();
});