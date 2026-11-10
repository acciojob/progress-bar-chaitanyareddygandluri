
let currentStep = 1;

const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

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

    // Activate circles based on current step
    circles.forEach(function(circle, index) {

        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    });

    // Disable Previous at first step
    prev.disabled = currentStep === 1;

    // Disable Next at last step
    next.disabled = currentStep === circles.length;
}
