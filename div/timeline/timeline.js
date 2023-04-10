document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    timelineEvents.forEach((event) => {
        event.addEventListener("mouseover", function () {
            this.querySelector(".timeline-content").style.backgroundColor = "#ccc";
        });

        event.addEventListener("mouseout", function () {
            this.querySelector(".timeline-content").style.backgroundColor = "#fff";
        });
    });
});
