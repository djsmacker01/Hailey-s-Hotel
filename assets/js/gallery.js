// Mobile Navigation Toggle
const navToggle = document.querySelector(".mobile-nav-toggle");
const navMenu = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Category Filtering
const categoryButtons = document.querySelectorAll(".category-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    // Show loading state
    const galleryGrid = document.getElementById("galleryGrid");
    galleryGrid.innerHTML = '<div class="loading">Loading images...</div>';

    // Simulate loading time
    setTimeout(() => {
      // Filter items
      let visibleItems = 0;

      // Clear loading state
      galleryGrid.innerHTML = "";

      // Add items back based on filter
      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        const clone = item.cloneNode(true);

        if (category === "all" || category === itemCategory) {
          galleryGrid.appendChild(clone);
          visibleItems++;

          // Add staggered animation delay
          clone.style.animationDelay = `${visibleItems * 0.1}s`;
        }
      });

      // If no items match the filter
      if (visibleItems === 0) {
        galleryGrid.innerHTML =
          '<div class="no-results">No images found in this category</div>';
      }

      // Initialize modal for new items
      initializeGalleryModal();
    }, 500);
  });
});

// Modal Gallery
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeButton = document.querySelector(".close-modal");
const prevButton = document.getElementById("prevImage");
const nextButton = document.getElementById("nextImage");

let currentIndex = 0;
let visibleItems = [];

function initializeGalleryModal() {
  const items = document.querySelectorAll(".gallery-grid .gallery-item");
  visibleItems = Array.from(items);

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      openModal(item);
    });
  });
}

function openModal(item) {
  const img = item.querySelector(".gallery-img");
  const caption = item.querySelector(".gallery-caption");

  modalImage.src = img.src;
  modalCaption.textContent = caption.textContent;

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  // Disable scroll on body
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);

  // Re-enable scroll
  document.body.style.overflow = "";
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % visibleItems.length;
  const nextItem = visibleItems[currentIndex];
  openModal(nextItem);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  const prevItem = visibleItems[currentIndex];
  openModal(prevItem);
}

closeButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "ArrowLeft") {
      showPrevImage();
    }
  }
});

// Newsletter form submission
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(
      `Thank you for subscribing with: ${email}! You will receive our latest news and promotions.`
    );
    newsletterForm.reset();
  });
}

// Initialize the gallery modal on page load
document.addEventListener("DOMContentLoaded", initializeGalleryModal);
