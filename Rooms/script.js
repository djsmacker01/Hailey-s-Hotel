
        // Add event listeners to Book Now buttons
        const bookButtons = document.querySelectorAll('.book-now-btn');
        bookButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Redirect to home page with booking form
                window.location.href = 'index.html';
            });
        });
    