// script.js
let type= new Typed ('#changing-text' ,{
    strings  : [ 'Geologist' , 'Tutor'],
    typeSpeed :50,
    backSpeed : 50,
    loop : true

});

document.addEventListener("DOMContentLoaded", function () {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll(".project-link");

    // Define document paths for each sample
    const documents = {
        "Blog Writing": "documents/blog-writing.pdf", // Change to your actual file path
        "Poem": "documents/moonlight-poem.pdf" // Change to your actual file path
    };

    // Add event listeners to each button
    downloadButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const projectTitle = this.parentElement.querySelector("h3").innerText; // Get the project title
            const fileUrl = documents[projectTitle]; // Get the corresponding file path

            if (fileUrl) {
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = fileUrl.split("/").pop(); // Extract filename from path
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert("File not found!"); // Error handling if the file path is incorrect
            }
        });
    });
});


