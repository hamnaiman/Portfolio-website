// script.js
let type= new Typed ('#changing-text' ,{
    strings  : ['Front-end Developer' , 'Geologist' , 'Tutor'],
    typeSpeed :50,
    backSpeed : 50,
    loop : true

});
 document.getElementById("downloadCvBtn").addEventListener("click", function() {
        // Create an invisible anchor element
        var link = document.createElement('a');
        
        // Set the download attribute with the path to your CV file
        link.href = 'frontend Develop Hamna.cv.docx';  // Path to your CV file
        link.download = 'Hamna_Iman_CV.pdf';  // Name the downloaded file
        
        // Append the link to the body
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Remove the link from the document after downloading
        document.body.removeChild(link);
    });

