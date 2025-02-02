document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
  
    // Add click event to all images
    document.querySelectorAll('.card-img-top').forEach(img => {
      img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
      });
    });
  
    // Close the modal when clicking the close button
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close the modal on clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  