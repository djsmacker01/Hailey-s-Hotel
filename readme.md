# Hailey's Hotel Website

![Hailey's Hotel Logo](images/ui.png)

## Project Overview

Hailey's Hotel website is a comprehensive digital platform designed to showcase our luxury accommodations and provide a seamless booking experience for potential guests. This project aims to increase online bookings, highlight the hotel's premium amenities, and establish a strong digital presence that reflects the elegance and quality of our physical locations.

Hailey's Hotel site is currently live, the link can be found <a href="https://haileyhotel.netlify.app/" target="_blank" rel="noopener noreferrer">Here</a>

## Value for Users

This website provides significant value to users by:

- **Simplified Booking Process**: Users can easily check availability and make reservations directly through the website.
- **Comprehensive Information**: Detailed descriptions and high-quality images of rooms, amenities, and services help users make informed decisions.
- **Mobile-Friendly Design**: Responsive layout ensures a seamless experience across all devices, allowing users to book on-the-go.
- **Special Offers Access**: Users can discover exclusive deals and packages available only through our website.
- **Virtual Tours**: Interactive gallery allows potential guests to explore the hotel before their stay.


## User Experience (UX)

### Business Goals

As the owner of Hailey's Hotel, our primary business goals are:

- To provide clear and comprehensive information about our luxury accommodations, including room types, amenities, pricing, and the unique benefits we offer.
- To encourage potential guests to book directly through our website by offering a seamless and convenient online reservation system.
- To showcase the quality and elegance of our hotel, emphasizing our ability to provide exceptional hospitality and unforgettable stays.
- To establish a strong online presence, increasing brand recognition and attracting a wider audience of travelers seeking premium accommodations.

### User Goals

As users of the Hailey's Hotel website, our goals are to:

- Easily navigate the website and find relevant information about room options, amenities, pricing details, and guest testimonials.
- Seamlessly navigate between different pages and easily return to the home screen with a single click, ensuring a smooth browsing experience.
- Access the main navigation menu conveniently, whether at the top or bottom of the page, allowing quick and effortless exploration of various sections of the website.
- Enjoy a responsive design that adapts to different screen sizes, ensuring all information and images are easily viewable on desktops, tablets, and mobile devices.
- View high-quality images that showcase the hotel's rooms, facilities, and surroundings, helping users visualize their potential stay.

### User Stories

#### As the business owner, I aim to:

- Establish a strong online presence for Hailey's Hotel and expand our guest base by reaching travelers seeking luxury accommodations.
- Inform potential guests about our premium facilities, including our elegantly designed rooms, fine dining options, and exceptional service.
- Provide a clear and efficient booking system for guests to reserve rooms directly, maximizing our direct bookings and reducing dependency on third-party platforms.

#### As a general user/customer of the website, I want to:

- Find detailed information about the various room types offered by Hailey's Hotel, including amenities, views, space, and pricing options.
- Easily access essential details such as location, contact information, and check-in/check-out times to plan my stay effectively.
- Explore the gallery section, showcasing the hotel's interiors, exteriors, and surrounding attractions to help me make an informed decision.

#### As a new user, I want to:

- Understand the unique qualities that set Hailey's Hotel apart from other accommodations, such as its exclusive services, premium location, or historical significance.
- Learn more about the facilities available at Hailey's Hotel, including restaurants, spa services, business centers, and recreational options.
- Have access to guest reviews and testimonials, validating the quality and service excellence of Hailey's Hotel.


### Design of the Website

The website has been divided into 5 different pages:

#### Home Page
The home page features an elegant and sophisticated design, with a hero slider showcasing the hotel's most impressive views and a prominent "Book Now" call-to-action button. The navigation menu is fixed at the top of the page to improve user experience and ensure easy navigation throughout the site.

#### Rooms & Suites
This page provides detailed information about the different accommodation options that the hotel offers. It includes descriptions, high-quality images, amenity lists, and pricing for each room type, allowing users to compare options and select the one that best suits their needs.

#### Amenities
The amenities page highlights all the facilities and services available at Hailey's Hotel, including restaurants, spa, fitness center, business services, and concierge assistance. Each amenity is presented with descriptive text and supporting images that convey the luxury experience guests can expect.

#### Gallery
The photo gallery page displays a curated selection of images from throughout the hotel property. The images are presented in a responsive grid layout and can be clicked to open in a lightbox viewer for a closer look. The page includes filtering options to help users find specific areas of interest (e.g., rooms, dining, exteriors).

#### Contact & Booking
The contact and booking page features an intuitive reservation form with fields for check-in/check-out dates, number of guests, room preferences, and special requests. The form includes validation to ensure all required information is provided correctly before submission. Additional contact information and a map showing the hotel's location are also included.

### Fonts

The following fonts have been used:

- Playfair Display (for headings and accents)
- Montserrat (for navigation and buttons)
- Open Sans (for body text)

### Colors

- Primary: #0e4c92 (deep blue)
- Secondary: #f7c331 (gold accent)
- Tertiary: #2c3e50 (dark navy)
- Footer Background: #1a2a3a
- Header Background: #ffffff with transparent overlay
- Active Navigation: #f7c331
- Hover Effect in Buttons and Links: #f7c331

## Project Structure

```
haileys-hotel/
│
├── Amenities/
│   ├── index.html       # Hotel Amenities and services
│   ├── style.css        # Primary stylesheet
│   ├── script.js        # Main Javascript functionality
├── Contact/
│   ├── index.html       # Contact information and form
│   ├── style.css        # Primary stylesheet
│   ├── script.js        # Main Javascript functionality
├── Gallery/
│   ├── index.html       # Photo gallery of the hotel
│   ├── style.css        # Primary stylesheet
│   ├── script.js        # Main javascript functionality
├── Rooms/
│   ├── index.html       # Room listing and details
│   ├── style.css        # Primary stylesheet
│   ├── script.js        # Javascript functionality


│   
          # Main homepage
├── rooms.html           # Room listings and details
├── amenities.html       # Hotel amenities and services
├── gallery.html         # Photo gallery of the hotel
├── booking.html         # Reservation system
├── contact.html         # Contact information and form

├── index.html           # Main homepage
├── rooms.html           # Room listings and details
├── amenities.html       # Hotel amenities and services
├── gallery.html         # Photo gallery of the hotel
├── booking.html         # Reservation system
├── contact.html         # Contact information and form
│
├── images/              
│   ├── Deluxe Queen Room.jpg            
│   ├── double bed.jpg           
│   ├── Executive-Suite.jpg       
│   ├── Family Room.jpg         
│   └── Hailey.jpeg          
│
└── README.md            # Project documentation
```

## Implementation Screenshots

### Homepage Hero Section

![Homepage Hero Section](images/Hailey.jpeg)

*The home page features an elegant and sophisticated design, with a hero slider showcasing the hotel's most impressive views and a prominent "Book Now" call-to-action button. The navigation menu is fixed at the top of the page to improve user experience and ensure easy navigation throughout the site.*

### Room Listings

![Room Listings](images/screenshots/room-listings.jpg)

*This section addresses the user story: "As a potential guest, I want to browse different room types with pricing information so that I can choose accommodations that fit my budget and preferences." Each room card includes images, detailed descriptions, amenities, and pricing with a direct booking button.*

### Booking System

![Booking System](images/screenshots/booking-form.jpg)

*The booking form implements the user story: "As a potential guest, I want to check room availability for specific dates so that I can plan my stay accordingly." The form includes date selection, guest count options, and real-time availability checking.*

### Amenities Section

![Amenities Section](images/screenshots/amenities.jpg)

*This section satisfies the user story: "As a potential guest, I want to learn about the hotel's amenities so that I can determine if it meets my needs." The grid layout with icons and descriptions clearly displays all available amenities.*

### Mobile Responsiveness

![Mobile View](images/screenshots/mobile-view.jpg)

*The mobile-friendly design addresses the user story: "As a mobile user, I want the website to be responsive so that I can browse and book rooms from my smartphone." All content adjusts appropriately for smaller screens while maintaining functionality.*

## External Code Attribution

### CSS Reset
```css
/* 
 * normalize.css v8.0.1
 * Source: https://necolas.github.io/normalize.css/
 * License: MIT License
 */
```

### Image Slider
```js
/*
 * Slick Carousel v1.8.1
 * Source: https://kenwheeler.github.io/slick/
 * License: MIT License
 */
```

### Date Picker for Booking
```js
/*
 * Flatpickr v4.6.9
 * Source: https://flatpickr.js.org/
 * License: MIT License
 */
```

### CSS Animations
```css
/*
 * Animate.css v4.1.1
 * Source: https://animate.style/
 * License: MIT License
 * Used for: Room card hover effects and page transitions
 */
```

## Project Requirements Implementation

### Responsive Design

The website is fully responsive across all device sizes. This was achieved through:
- Mobile-first CSS approach
- Flexible grid layouts using CSS Grid and Flexbox
- Media queries for specific breakpoints
- Responsive typography with relative units
- Touch-friendly UI elements for mobile users

### Performance Optimization

Performance was a priority throughout development:
- Optimized images with appropriate dimensions and compression
- Minified CSS and JavaScript files
- Lazy loading for images below the fold
- Limited use of external libraries to reduce load time
- Browser caching implemented for static assets

### Accessibility Considerations

The website follows WCAG 2.1 guidelines:
- Semantic HTML elements throughout
- Proper heading hierarchy (h1-h6)
- ARIA attributes where appropriate
- Color contrast ratios meeting AA standards
- Keyboard navigation support
- Alt text for all images

## Development Process

The development process followed these key steps:
1. Requirements gathering and user story development
2. Wireframing and design mockups
3. HTML structure implementation
4. CSS styling and responsive design
5. JavaScript functionality integration
6. Testing across devices and browsers
7. Performance optimization
8. Deployment

## Git Version Control

This project used Git for version control with regular, meaningful commits:
```
git init
git add README.md
git commit -m "Initial project setup with README"
git add index.html css/reset.css
git commit -m "Add homepage structure and CSS reset"
git add css/main.css
git commit -m "Implement responsive header and navigation"
```

## Future Enhancements

Planned future enhancements include:
- Integration with a real-time booking API
- Multi-language support
- Virtual reality room tours
- Guest review system
- Loyalty program integration

---

© 2025 Hailey's Hotel. All Rights Reserved.