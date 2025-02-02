// gallery.js

// Function to open the modal and display the clicked image
function zoomImage(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    
    // Set the source of the modal image to be the clicked image
    modalImg.src = imageSrc;

    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    // Hide the modal
    modal.style.display = "none";
}

// Event listener for all cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = this.querySelector('.card-img').src; // Get the corresponding image source
        zoomImage(imgSrc); // Call zoomImage with the source
    });
});