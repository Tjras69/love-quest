
document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll(".task-check");

    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const progressMessage = document.getElementById("progressMessage");
    const completion = document.getElementById("completion");
    const currentDate = document.getElementById("currentDate");

    const totalTasks = checkboxes.length;

    // Display today's date
    const today = new Date();

    currentDate.textContent = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });


    // Load saved progress
    function loadProgress() {

        checkboxes.forEach(checkbox => {

            const task = checkbox.dataset.task;

            const saved = localStorage.getItem("loveQuest_" + task);

            checkbox.checked = saved === "true";

            updateCard(checkbox);

        });

        updateProgress();
    }


    // Update task appearance
    function updateCard(checkbox) {

        const card = checkbox.closest(".task-card");

        if (checkbox.checked) {
            card.classList.add("completed");
        } else {
            card.classList.remove("completed");
        }

    }


    // Update progress bar
    function updateProgress() {

        let completedTasks = 0;

        checkboxes.forEach(checkbox => {

            if (checkbox.checked) {
                completedTasks++;
            }

        });

        const percentage = (completedTasks / totalTasks) * 100;

        progressFill.style.width = percentage + "%";

        progressText.textContent =
            completedTasks + " / " + totalTasks;

        // Dynamic messages
        if (completedTasks === 0) {

            progressMessage.textContent =
                "Every little step counts. You got this! ♡";

        } else if (completedTasks === 1) {

            progressMessage.textContent =
                "Beautiful start! Keep going, Mimi! 🌸";

        } else if (completedTasks === 2) {

            progressMessage.textContent =
                "Halfway there! You're doing amazing! 💗";

        } else if (completedTasks === 3) {

            progressMessage.textContent =
                "Almost there! One last mission! ✨";

        } else {

            progressMessage.textContent =
                "You completed everything! I'm so proud of you! ❤️";

        }

        // Show congratulations
        if (completedTasks === totalTasks) {
            completion.classList.add("show");
        } else {
            completion.classList.remove("show");
        }

    }


    // Listen for task completion
    checkboxes.forEach(checkbox => {

        checkbox.addEventListener("change", () => {

            const task = checkbox.dataset.task;

            // Save progress
            localStorage.setItem(
                "loveQuest_" + task,
                checkbox.checked
            );

            updateCard(checkbox);

            updateProgress();

        });

    });


    // Initialize
    loadProgress();

});
