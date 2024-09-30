document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.getAttribute('data-description');
        item.appendChild(tooltip);

        // Show tooltip on hover
        item.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });

        // Hide tooltip on mouse out
        item.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
