// DOM Elements
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

// Form submission handler
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Validate form data
  if (!validateForm(formData)) {
    showToast("Please fill in all required fields correctly.", "error");
    return;
  }

  // Simulate form submission (replace with actual API call in production)
  submitForm(formData);
});

// Form validation
function validateForm(data) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s-+()]*$/;

  if (!data.name.trim()) {
    return false;
  }
  if (!emailRegex.test(data.email)) {
    return false;
  }
  if (data.phone && !phoneRegex.test(data.phone)) {
    return false;
  }
  if (!data.message.trim()) {
    return false;
  }

  return true;
}

// Simulate form submission
function submitForm(formData) {
  // Show loading state
  showToast("Sending message...", "loading");

  // Simulate API call
  setTimeout(() => {
    // Reset the form
    contactForm.reset();

    // Show success message
    showToast(
      "Thank you for your message! We will get back to you shortly.",
      "success"
    );
  }, 1500);
}

// Show toast notification with different types
function showToast(message, type = "success") {
  // Remove any existing classes
  toast.className = "toast";

  // Add type-specific class
  toast.classList.add(type);

  // Set message
  toast.textContent = message;

  // Show toast with animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}
