const images = document.querySelectorAll('.gallery-item img');

    images.forEach(image => {
        // Add touchstart event to expand the image on tap
        image.addEventListener('touchstart', () => {
            image.style.transform = 'scale(3)'; // Expand on tap
        });

        // Add touchend event to shrink the image back after tap
        image.addEventListener('touchend', () => {
            image.style.transform = 'scale(1)'; // Shrink back on release
        });
    });
