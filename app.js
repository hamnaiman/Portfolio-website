document.addEventListener("DOMContentLoaded", function () {
    // Initialize typed.js for text animation
    new Typed("#changing-text", {
        strings: ["Geologist", "Tutor"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Handle CV download
    const cvButton = document.getElementById("download-cv");
    if (cvButton) {
        cvButton.addEventListener("click", function (event) {
            event.preventDefault();

            const cvUrl = "Mern stack Developer HAMNA IMAN.cv.docx.pdf"; // Ensure filename matches exactly
            const link = document.createElement("a");
            link.href = cvUrl;
            link.download = "MERN-Stack-Developer-CV.docx"; // Set a clean download name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
