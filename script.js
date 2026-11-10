
let currentStep = 1;

const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");

next.addEventListener("click", function () {
    if (currentStep < circles.length) {
        currentStep++;
    }

    updateProgress();
});

prev.addEventListener("click", function () {
    if (currentStep > 1) {
        currentStep--;
    }

    updateProgress();
});

function updateProgress() {

    circles.forEach(function(circle, index) {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update progress line width
    progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + "%";

    // Enable and disable buttons
    prev.disabled = currentStep === 1;
    next.disabled = currentStep === circles.length;
}
