
// DOM Elements
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// Form submission handler
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // In a real application, you would send this data to a server
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log('Form data:', formData);

    // Reset the form
    contactForm.reset();

    // Show success message
    showToast('Thank you for your message! We will get back to you shortly.');
});

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    // Hide toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}
