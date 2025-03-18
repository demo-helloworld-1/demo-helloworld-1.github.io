document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    
    if (scrollContainer) {
        scrollContainer.addEventListener('wheel', function(event) {
        // Prevent default vertical scrolling
        event.preventDefault();
        
        // Adjust the horizontal scroll position based on vertical scroll input
        scrollContainer.scrollLeft += event.deltaY;
      }, { passive: false }); // Using non-passive listener for preventDefault to work
    }
});
