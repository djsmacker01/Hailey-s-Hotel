// Sample room data (in a real application, this would come from a database)
const rooms = [
  {
    id: 1,
    name: "Standard Double Room",
    type: "standard",
    price: 99,
    maxGuests: 2,
    features: ["Free WiFi", "TV", "AC", "Daily Housekeeping"],
    image: "images/Deluxe Queen Room.jpg",
  },
  {
    id: 2,
    name: "Deluxe Queen Room",
    type: "deluxe",
    price: 149,
    maxGuests: 2,
    features: ["Free WiFi", "TV", "AC", "Mini Bar", "Coffee Machine"],
    image: "images/double bed.jpg",
  },
  {
    id: 3,
    name: "Executive Suite",
    type: "suite",
    price: 249,
    maxGuests: 3,
    features: [
      "Free WiFi",
      "TV",
      "AC",
      "Mini Bar",
      "Coffee Machine",
      "Separate Living Area",
    ],
    image: "images/Executive-Suite.jpg",
  },
  {
    id: 4,
    name: "Family Room",
    type: "family",
    price: 199,
    maxGuests: 5,
    features: ["Free WiFi", "TV", "AC", "Multiple Beds", "Spacious"],
    image: "images/Family Room.jpg",
  },
];

// DOM Elements
const searchForm = document.getElementById("searchForm");
const roomsContainer = document.getElementById("roomsContainer");
const bookingModal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const confirmationDetails = document.getElementById("confirmationDetails");
const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Store selected room and dates
let selectedRoom = null;
let checkInDate = null;
let checkOutDate = null;
let guestCount = null;

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const isMenuToggle = e.target.closest(".menu-toggle");
  const isNav = e.target.closest("nav");
  const isMenuActive = mainNav.classList.contains("active");

  if (isMenuActive && !(isMenuToggle || isNav)) {
    mainNav.classList.remove("active");
  }
});

// Initialize date inputs with today and tomorrow
window.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  document.getElementById("check-in").value = formatDate(today);
  document.getElementById("check-out").value = formatDate(tomorrow);

  // Initial room display
  displayRooms();

  // Add input event listeners for mobile-friendly form validation
  document.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.hasAttribute("required") && !this.value) {
        this.style.borderColor = "red";
      } else {
        this.style.borderColor = "#ddd";
      }
    });
  });
});

// Search form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInDate = document.getElementById("check-in").value;
  checkOutDate = document.getElementById("check-out").value;
  guestCount = document.getElementById("guests").value;

  // Validate dates
  const checkin = new Date(checkInDate);
  const checkout = new Date(checkOutDate);

  if (checkout <= checkin) {
    showToast("Check-out date must be after check-in date");
    return;
  }

  const roomType = document.getElementById("room-type").value;
  displayRooms(roomType);

  // Scroll to results
  document.getElementById("roomResults").scrollIntoView({ behavior: "smooth" });
});

// Display rooms based on filters
function displayRooms(type = "any") {
  roomsContainer.innerHTML = "";

  let filteredRooms = rooms;
  if (type !== "any") {
    filteredRooms = rooms.filter((room) => room.type === type);
  }

  // Filter by guest count
  filteredRooms = filteredRooms.filter(
    (room) =>
      room.maxGuests >= parseInt(document.getElementById("guests").value)
  );

  if (filteredRooms.length === 0) {
    roomsContainer.innerHTML =
      '<p style="text-align: center; grid-column: 1/-1; padding: 20px;">No rooms matching your criteria. Please adjust your search.</p>';
    return;
  }

  filteredRooms.forEach((room) => {
    const roomCard = document.createElement("div");
    roomCard.className = "room-card";

    // Calculate the total price based on the number of nights
    const nights = calculateNights(
      document.getElementById("check-in").value,
      document.getElementById("check-out").value
    );
    const totalPrice = room.price * nights;

    roomCard.innerHTML = `
                    <div class="room-img" style="background-image: url('${
                      room.image
                    }')"></div>
                    <div class="room-details">
                        <h3>${room.name}</h3>
                        <p class="room-price">£${room.price} per night</p>
                        <div class="room-features">
                            ${room.features
                              .map(
                                (feature) =>
                                  `<span class="feature">${feature}</span>`
                              )
                              .join("")}
                        </div>
                        <button class="book-now-btn" data-room-id="${
                          room.id
                        }">Book Now - $${totalPrice} total</button>
                    </div>
                `;

    roomsContainer.appendChild(roomCard);
  });

  // Add event listeners to "Book Now" buttons
  document.querySelectorAll(".book-now-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const roomId = parseInt(e.target.dataset.roomId);
      selectedRoom = rooms.find((room) => room.id === roomId);
      openBookingModal();
    });
  });
}

// Calculate number of nights between two dates
function calculateNights(checkIn, checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const timeDiff = Math.abs(end - start);
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

// Open booking modal with selected room details
function openBookingModal() {
  if (!selectedRoom) {
    return;
  }

  checkInDate = document.getElementById("check-in").value;
  checkOutDate = document.getElementById("check-out").value;
  guestCount = document.getElementById("guests").value;

  const nights = calculateNights(checkInDate, checkOutDate);
  const totalPrice = selectedRoom.price * nights;

  confirmationDetails.innerHTML = `
                <p><strong>Room:</strong> ${selectedRoom.name}</p>
                <p><strong>Check-in:</strong> ${formatDisplayDate(
                  checkInDate
                )}</p>
                <p><strong>Check-out:</strong> ${formatDisplayDate(
                  checkOutDate
                )}</p>
                <p><strong>Guests:</strong> ${guestCount}</p>
                <p><strong>Total:</strong> £${totalPrice} (${nights} nights at £${
    selectedRoom.price
  }/night)</p>
            `;

  bookingModal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scrolling on mobile
}

// Format date for display (YYYY-MM-DD to Month Day, Year)
function formatDisplayDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Close modal
closeModal.addEventListener("click", () => {
  bookingModal.style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling
});

// Close modal if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
  }
});

// Handle booking form submission
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Form validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const hasEmptyFields = [name, email, phone].some((field) => !field);
  if (hasEmptyFields) {
    showToast("Please fill in all required fields");
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast("Please enter a valid email address");
    return;
  }

  // In a real application, you would send this data to a server
  const bookingData = {
    roomId: selectedRoom.id,
    roomName: selectedRoom.name,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    guests: guestCount,
    name: name,
    email: email,
    phone: phone,
  };

  console.log("Booking data:", bookingData);

  // Reset the form
  bookingForm.reset();

  // Close the modal
  bookingModal.style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling

  // Show success message
  showToast(
    "Booking successful! Confirmation details have been sent to your email."
  );
});

// Show toast notification
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}
