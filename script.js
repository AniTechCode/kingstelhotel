// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const spans = menuToggle.querySelectorAll('span');
  
  if (mobileMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('active');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Set minimum date for check-in and check-out
const checkInInput = document.querySelector('#check-in');
const checkOutInput = document.querySelector('#check-out');

const today = new Date().toISOString().split('T')[0];
checkInInput.min = today;
checkOutInput.min = today;

// Update check-out minimum date when check-in date changes
checkInInput.addEventListener('change', (e) => {
  checkOutInput.min = e.target.value;
  if (checkOutInput.value && checkOutInput.value < e.target.value) {
    checkOutInput.value = e.target.value;
  }
});

// Special Offers Slider
const slider = document.querySelector('#offersSlider');
const track = slider.querySelector('.offers-track');
const slides = track.children;
const prevBtn = slider.querySelector('.slider-prev');
const nextBtn = slider.querySelector('.slider-next');

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Event listeners for slider controls
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance slides
let interval = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
slider.addEventListener('mouseenter', () => clearInterval(interval));
slider.addEventListener('mouseleave', () => {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
});

// Handle window resize
window.addEventListener('resize', updateSlider);

// Rooms scroll functionality
const roomsScrollContainer = document.querySelector('.rooms-scroll-container');
const roomsWrapper = document.querySelector('.rooms-wrapper');
const scrollPrevBtn = document.querySelector('.scroll-prev');
const scrollNextBtn = document.querySelector('.scroll-next');

function updateRoomScroll() {
  const roomCards = roomsWrapper.querySelectorAll('.room-card');
  if (!roomCards.length) return;

  const roomWidth = roomCards[0].offsetWidth + parseInt(getComputedStyle(roomCards[0]).marginRight);
  roomsWrapper.scrollBy({ left: roomWidth, behavior: 'smooth' });
}

function updateButtonVisibility() {
  const isScrollableLeft = roomsWrapper.scrollLeft > 0;
  const isScrollableRight = roomsWrapper.scrollLeft + roomsWrapper.clientWidth < roomsWrapper.scrollWidth - 10;

  scrollPrevBtn.style.opacity = isScrollableLeft ? '1' : '0.3';
  scrollPrevBtn.style.pointerEvents = isScrollableLeft ? 'auto' : 'none';
  scrollNextBtn.style.opacity = isScrollableRight ? '1' : '0.3';
  scrollNextBtn.style.pointerEvents = isScrollableRight ? 'auto' : 'none';
}

if (roomsScrollContainer && roomsWrapper && scrollPrevBtn && scrollNextBtn) {
  // Manual scrolling
  scrollPrevBtn.addEventListener('click', () => {
    const roomCards = roomsWrapper.querySelectorAll('.room-card');
    const roomWidth = roomCards[0].offsetWidth + parseInt(getComputedStyle(roomCards[0]).marginRight);
    roomsWrapper.scrollBy({ left: -roomWidth, behavior: 'smooth' });
  });

  scrollNextBtn.addEventListener('click', () => {
    const roomCards = roomsWrapper.querySelectorAll('.room-card');
    const roomWidth = roomCards[0].offsetWidth + parseInt(getComputedStyle(roomCards[0]).marginRight);
    roomsWrapper.scrollBy({ left: roomWidth, behavior: 'smooth' });
  });

  // Automatic scrolling
  let roomInterval = setInterval(() => {
    const roomCards = roomsWrapper.querySelectorAll('.room-card');
    const roomWidth = roomCards[0].offsetWidth + parseInt(getComputedStyle(roomCards[0]).marginRight);
    const isAtEnd = roomsWrapper.scrollLeft + roomsWrapper.clientWidth >= roomsWrapper.scrollWidth - 10;

    if (isAtEnd) {
      roomsWrapper.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      roomsWrapper.scrollBy({ left: roomWidth, behavior: 'smooth' });
    }
  }, 5000);

  // Pause auto-scroll on hover
  roomsScrollContainer.addEventListener('mouseenter', () => clearInterval(roomInterval));
  roomsScrollContainer.addEventListener('mouseleave', () => {
    clearInterval(roomInterval);
    roomInterval = setInterval(() => {
      const roomCards = roomsWrapper.querySelectorAll('.room-card');
      const roomWidth = roomCards[0].offsetWidth + parseInt(getComputedStyle(roomCards[0]).marginRight);
      const isAtEnd = roomsWrapper.scrollLeft + roomsWrapper.clientWidth >= roomsWrapper.scrollWidth - 10;

      if (isAtEnd) {
        roomsWrapper.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        roomsWrapper.scrollBy({ left: roomWidth, behavior: 'smooth' });
      }
    }, 5000);
  });

  // Update button visibility on scroll and resize
  roomsWrapper.addEventListener('scroll', updateButtonVisibility);
  window.addEventListener('resize', updateButtonVisibility);
  updateButtonVisibility();
}

// Newsletter Form Handling
document.addEventListener('DOMContentLoaded', () => {
  if (window.emailjs) {
    emailjs.init("CZtyCC0LKloAKQZMR");
    console.log('EmailJS initialized successfully');
  } else {
    console.error('EmailJS script not loaded');
  }

  const newsletterForm = document.getElementById('newsletterForm');
  const messageContainer = document.getElementById('newsletterMessage');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('#newsletterEmail');
      const email = emailInput.value.trim();
      const submitButton = newsletterForm.querySelector('.btn-subscribe');

      if (!newsletterForm.checkValidity()) {
        newsletterForm.reportValidity();
        return;
      }

      submitButton.disabled = true;
      submitButton.querySelector('.btn-text').textContent = 'Subscribing...';

      const formData = {
        email: email,
        from_name: "Newsletter Subscriber",
        to_email: "kingstelhotel@gmail.com",
        subject: "New Newsletter Subscription",
        message: `A new subscriber has joined your newsletter: ${email}`
      };

      try {
        await emailjs.send("service_hd0gj5z", "template_86ka2or", formData);

        messageContainer.className = 'message success';
        messageContainer.textContent = 'Subscribed! Welcome aboard!';
        messageContainer.style.display = 'block';

        newsletterForm.reset();

        setTimeout(() => {
          messageContainer.style.display = 'none';
        }, 3000);
      } catch (error) {
        console.error('Newsletter subscription error:', {
          message: error.message,
          status: error.status,
          text: error.text
        });
        messageContainer.className = 'message error';
        messageContainer.textContent = 'Subscription failed. Try again.';
        messageContainer.style.display = 'block';

        setTimeout(() => {
          messageContainer.style.display = 'none';
        }, 3000);
      } finally {
        submitButton.disabled = false;
        submitButton.querySelector('.btn-text').textContent = 'Subscribe';
        lucide.createIcons();
      }
    });
  }
});

const headings = [
  "Experience Luxury at Its Finest",
  "Stay in Style, Book with Ease",
  "Discover Your Perfect Stay Today"
];

let currentHeadingIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenHeadings = 2000;

const typewriterElement = document.getElementById("typewriter");

typewriterElement.style.borderRight = "3px solid white";
typewriterElement.style.paddingRight = "5px";

function adjustTypewriterWidth() {
  typewriterElement.style.width = "auto";
}

function type() {
  if (charIndex < headings[currentHeadingIndex].length) {
    typewriterElement.innerHTML = headings[currentHeadingIndex].substring(0, charIndex + 1);
    charIndex++;
    adjustTypewriterWidth();
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenHeadings);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.innerHTML = headings[currentHeadingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
    setTimeout(type, typingSpeed);
  }
}

type();

// Handle "Book Now" buttons in featured rooms
document.querySelectorAll('.btn-book').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const roomCard = button.closest('.room-card'); 
    const roomName = roomCard.querySelector('h3').textContent; 
    const priceText = roomCard.querySelector('.room-price').textContent; 
    const price = parseInt(priceText.match(/\d+/)[0]); 
    
    alert("Fill the form to check available rooms.");
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  });
});

// Room data
const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    description: 'Comfortable and cozy room with modern amenities for a pleasant stay.',
    priceSingle: 700,
    priceDouble: 900,
    image: 'images/RM 419.jpg',
    features: [
      { icon: 'bed', text: 'King Size Bed' },
      { icon: 'maximize', text: '45 sq.m' },
      { icon: 'wifi', text: 'Free Wi-Fi' },
      { icon: 'tv', text: 'Smart TV' },
      { icon: 'wind', text: 'Air Conditioning' },
      { icon: 'coffee', text: 'Mini Bar' }
    ]
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'Spacious suite with city views, king-size bed, and luxury amenities.',
    priceSingle:850.00,
    priceDouble: 900,
    image: 'images/RM 201.jpg',
    features: [
      { icon: 'bed', text: 'King Size Bed' },
      { icon: 'maximize', text: '45 sq.m' },
      { icon: 'wifi', text: 'Free Wi-Fi' },
      { icon: 'tv', text: 'Smart TV' },
      { icon: 'wind', text: 'Air Conditioning' },
      { icon: 'coffee', text: 'Mini Bar' }
    ]
  },
  {
    id: 3,
    name: 'Super Deluxe',
    description: 'Luxury room with panoramic views and exclusive privileges.',
    priceSingle: 1000.00,
    priceDouble: 900,
    image: 'images/RM 201.jpg',
    features: [
      { icon: 'bed', text: 'King Size Bed' },
      { icon: 'maximize', text: '45 sq.m' },
      { icon: 'wifi', text: 'Free Wi-Fi' },
      { icon: 'tv', text: 'Smart TV' },
      { icon: 'wind', text: 'Air Conditioning' },
      { icon: 'coffee', text: 'Mini Bar' }
    ]
  },
  {
    id: 4,
    name: 'Mini Suite',
    description: 'Elegant suite with separate living area and premium services.',
    priceSingle: 1100,
    priceDouble: 900,
    image: 'images/Mini Suit.jpg',
    features: [
      { icon: 'bed', text: 'King Size Bed' },
      { icon: 'maximize', text: '45 sq.m' },
      { icon: 'wifi', text: 'Free Wi-Fi' },
      { icon: 'tv', text: 'Smart TV' },
      { icon: 'wind', text: 'Air Conditioning' },
      { icon: 'coffee', text: 'Mini Bar' }
    ]
  },
  {
    id: 5,
    name: 'Executive Suite',
    description: 'Ultimate luxury with panoramic views and exclusive amenities.',
    priceSingle: 700,
    priceDouble: 900,
    image: 'images/RM 201.jpg',
    features: [
      { icon: 'bed', text: 'King Size Bed' },
      { icon: 'maximize', text: '45 sq.m' },
      { icon: 'wifi', text: 'Free Wi-Fi' },
      { icon: 'tv', text: 'Smart TV' },
      { icon: 'wind', text: 'Air Conditioning' },
      { icon: 'coffee', text: 'Mini Bar' }
    ]
  }
];

// Modal functionality
const roomModal = document.getElementById('roomModal');
const bookingModal = document.getElementById('bookingModal');
const checkAvailabilityBtn = document.getElementById('checkAvailability');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const availableRoomsContainer = document.querySelector('.available-rooms');

// Helper function to format dates
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// Calculate number of nights between two dates
function calculateNights(checkIn, checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return nights;
}

// Show room modal with available rooms
function showRoomModal() {
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const guests = parseInt(document.getElementById('guests').value);

  if (!checkIn || !checkOut) {
    alert('Please select check-in and check-out dates');
    return;
  }

  document.getElementById('modalCheckIn').textContent = formatDate(checkIn);
  document.getElementById('modalCheckOut').textContent = formatDate(checkOut);
  document.getElementById('modalGuests').textContent = `${guests} Guest${guests > 1 ? 's' : ''}`;

  const nights = calculateNights(checkIn, checkOut);

  availableRoomsContainer.innerHTML = rooms.map(room => {
    const roomPrice = guests === 1 ? room.priceSingle : room.priceDouble;

    return `
      <div class="room-details-card">
        <div class="room-details-image">
          <img src="${room.image}" alt="${room.name}">
        </div>
        <div class="room-details-content">
          <div class="room-details-header">
            <div class="room-details-title">
              <h3>${room.name}</h3>
              <p>${room.description}</p>
            </div>
            <div class="room-details-price">
              <div class="price-amount">GH¢${roomPrice}</div>
              <div class="price-night">per night</div>
              <div class="price-total">GH¢${roomPrice * nights} total</div>
            </div>
          </div>
          <div class="room-details-features">
            ${room.features.map(feature => `
              <div class="feature-item">
                <i data-lucide="${feature.icon}"></i>
                <span>${feature.text}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn-book" onclick="showBookingModal('${room.name}', ${roomPrice}, ${nights}, ${guests})">
            Book Now
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
  roomModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Show booking modal
window.showBookingModal = function (roomType, price, nights, guests) {
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;

  const totalPrice = price * nights;

  document.getElementById('roomType').textContent = roomType;
  document.getElementById('bookingDates').textContent = `${formatDate(checkIn)} - ${formatDate(checkOut)}`;
  document.getElementById('bookingPrice').textContent = `GH¢${totalPrice} total for ${guests} Guest${guests > 1 ? 's' : ''}`;

  document.getElementById('hiddenRoomType').value = roomType;
  document.getElementById('hiddenBookingDates').value = `${formatDate(checkIn)} - ${formatDate(checkOut)}`;
  document.getElementById('hiddenBookingPrice').value = totalPrice;

  roomModal.classList.remove('active');
  bookingModal.classList.add('active');
};

// Handle form submission with EmailJS
async function handleFormSubmission(event) {
  event.preventDefault();
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const successMessage = document.getElementById("successMessage");

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const specialRequests = form.specialRequests.value.trim();
  const roomType = form.hiddenRoomType.value;
  const bookingDates = form.hiddenBookingDates.value;
  const totalPrice = parseFloat(form.hiddenBookingPrice.value);

  if (!firstName || !lastName || !email || !phone || !roomType || !bookingDates || isNaN(totalPrice)) {
    alert("Please fill out all required fields correctly.");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  const formData = {
    from_name: `${firstName} ${lastName}`,
    to_email: "kingstelhotel@gmail.com",
    subject: "New Booking Request",
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    specialRequests: specialRequests || "None",
    roomType: roomType,
    bookingDates: bookingDates,
    bookingPrice: `GH¢${totalPrice.toFixed(2)}`
  };

  console.log('Form Data being sent:', formData);

  try {
    if (!window.emailjs) {
      throw new Error("EmailJS script not loaded");
    }

    const response = await emailjs.send("service_q2b4any", "template_hzup96s", formData);
    console.log('EmailJS response:', response);

    successMessage.style.display = "block";
    form.style.display = "none";

    setTimeout(() => {
      successMessage.style.display = "none";
      form.style.display = "block";
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    }, 3000);

    form.reset();
  } catch (error) {
    console.error('Booking submission error:', {
      message: error.message,
      status: error.status,
      text: error.text,
      stack: error.stack
    });

    let errorMessage = "An error occurred while sending your booking. Please try again.";
    if (error.message.includes("EmailJS script not loaded")) {
      errorMessage = "Email service is not available. Please try again later.";
    } else if (error.status === 400) {
      errorMessage = "Invalid form data or template configuration. Please check your inputs.";
    } else if (error.status === 401 || error.status === 403) {
      errorMessage = "Authentication issue. Please verify your EmailJS user ID.";
    } else if (error.status >= 500) {
      errorMessage = "Email service server issue. Please try again later.";
    } else if (error.status === 429) {
      errorMessage = "Too many requests. Please try again later.";
    }

    alert(errorMessage);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Confirm Booking';
  }
}

// Ensure EmailJS is loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  if (window.emailjs) {
    emailjs.init("CZtyCC0LKloAKQZMR");
    console.log('EmailJS initialized successfully');
  } else {
    console.error('EmailJS script not loaded');
  }
});

// Attach event listeners
checkAvailabilityBtn.addEventListener('click', showRoomModal);
document.getElementById("bookingDetailsForm").addEventListener("submit", handleFormSubmission);

modalCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    roomModal.classList.remove('active');
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === roomModal) {
    roomModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (e.target === bookingModal) {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Special offer button handlers
document.querySelector('.offer-card .btn-book').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'conference.html';
});

document.querySelector('.offer-card .wedding').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'conference.html';
});

document.querySelector('.offer-card .restaurant').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'dining.html';
});

document.querySelector('.offer-card .navBtn').addEventListener('click', (e) => { 
  e.preventDefault(); 
  window.location.href = 'index.html#rooms'; 
});

document.addEventListener('DOMContentLoaded', () => {
  console.log("call-now.js loaded");

  const callNowButton = document.querySelector('.offer-card .call-now');

  if (!callNowButton) {
    console.error("Call Now button not found");
    return;
  }

  callNowButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Call Now clicked");
    
    try {
      window.location.href = 'tel:+233312290511';
    } catch (error) {
      console.error("Failed to initiate call:", error);
      alert('Please call us at +233 31 229 0511');
    }
  });
});

// Initialize Lucide icons
lucide.createIcons();