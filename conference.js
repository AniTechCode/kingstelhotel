// Initialize EmailJS
emailjs.init("CZtyCC0LKloAKQZMR");

console.log("conference.js loaded");

// Custom popup function
function showPopup(message, isSuccess = true) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336';
    popup.style.color = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    popup.style.zIndex = '1000';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.textAlign = 'center';
    popup.innerHTML = `<p style="margin: 0; font-size: 16px;">${message}</p>`;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 3000); // Remove after 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const bookNowButtons = document.querySelectorAll('.conference-card .btn-book'); // Target only conference card buttons
    const conferenceModal = document.getElementById('conferenceModal');
    const modalClose = document.querySelector('.modal-close');
    const form = document.getElementById('conferenceBookingForm');
    const confirmBookingButton = document.getElementById('confirmBooking');

    console.log("Form element:", form);
    console.log("Confirm Booking button:", confirmBookingButton);

    if (!form) {
        console.error("Form with id 'conferenceBookingForm' not found");
        return;
    }
    if (!confirmBookingButton) {
        console.error("Button with id 'confirmBooking' not found");
        return;
    }

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        console.log("Menu toggle clicked");
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

    // Show modal with conference details
    function showConferenceModal(conferenceType, conferencePrice) {
        console.log("Showing modal for:", conferenceType, conferencePrice);
        document.getElementById('conferenceType').textContent = conferenceType;
        document.getElementById('conferencePrice').textContent = conferencePrice;
        conferenceModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        console.log("Closing modal");
        conferenceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Book Now button listeners
    bookNowButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Book Now clicked");
            const conferenceCard = this.closest('.conference-card');
            const conferenceType = conferenceCard.querySelector('h2').textContent;
            const conferencePrice = conferenceCard.querySelector('.price-badge').textContent;
            showConferenceModal(conferenceType, conferencePrice);
        });
    });

    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === conferenceModal) {
            closeModal();
        }
    });

    // Form submission handler
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Form submitted");

        // Validate form
        if (!form.checkValidity()) {
            console.log("Form validation failed");
            form.reportValidity();
            return;
        }

        // Collect form data
        const companyName = document.getElementById('companyName').value;
        const contactPerson = document.getElementById('contactPerson').value;
        const email = document.getElementById('conferenceEmail').value;
        const phone = document.getElementById('conferencePhone').value;
        const eventDate = document.getElementById('eventDate').value;
        const attendees = parseInt(document.getElementById('attendees').value, 10);
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const requests = document.getElementById('conferenceRequests').value || 'No additional requirements';
        const conferenceType = document.getElementById('conferenceType').textContent || 'Not specified';
        const conferencePrice = document.getElementById('conferencePrice').textContent || 'Not specified';

        // Log form data for debugging
        console.log("Form Data:", {
            companyName, contactPerson, email, phone, eventDate, attendees, startTime, endTime, requests, conferenceType, conferencePrice
        });

        // Validate attendees based on conference type
        let maxCapacity;
        if (conferenceType === "Large Conference Room") {
            maxCapacity = requests.toLowerCase().includes('table') ? 400 : 500;
        } else if (conferenceType === "Mini Conference Room") {
            maxCapacity = requests.toLowerCase().includes('table') ? 150 : 200;
        } else {
            maxCapacity = Infinity; // No limit if type is unknown
        }

        if (attendees > maxCapacity) {
            showPopup(`Error: ${conferenceType} can only accommodate ${maxCapacity} attendees${requests.toLowerCase().includes('table') ? ' with tables' : ' without tables'}. Please adjust the number of attendees.`, false);
            return;
        }

        // Hotel notification parameters (only to one email)
        const hotelParams = {
            from_name: contactPerson,
            to_email: 'kingstelhotel@gmail.com', // Only one email
            reply_to: email,
            subject: 'New Conference Room Booking Request',
            company_name: companyName,
            contact_person: contactPerson,
            email: email,
            phone: phone,
            event_date: eventDate,
            attendees: attendees,
            start_time: startTime,
            end_time: endTime,
            conference_type: conferenceType, // Matches template
            conference_price: conferencePrice, // Matches template
            additional_requests: requests
        };

        // User confirmation parameters
        const userParams = {
            from_name: 'Kingstel Hotel',
            to_email: email,
            subject: 'Booking Request Received - Kingstel Hotel',
            company_name: companyName,
            contact_person: contactPerson,
            event_date: eventDate,
            conference_type: conferenceType
        };

        // Show popup immediately
        showPopup('Your details have been sent, and we will call you shortly.');

        // Send hotel email (only once)
        emailjs.send('service_q2b4any', 'template_nvy9sbh', hotelParams)
            .then((response) => {
                console.log('Hotel email (kingstelhotel@gmail.com) sent:', response.status, response.text);
                form.reset();
                closeModal();

                // Send user confirmation email
                return emailjs.send('service_q2b4any', 'template_user_confirmation', userParams).catch((error) => {
                    console.warn('User confirmation email failed:', error.text || 'Unknown error');
                });
            })
            .then((response) => {
                if (response) {
                    console.log('User confirmation email sent:', response.status, response.text);
                }
            })
            .catch((error) => {
                console.error('Hotel email sending failed:', error);
                showPopup(`Oops! Something went wrong: ${error.text || 'Unknown error'}. Please try again.`, false);
            });
    });

    // Confirm booking button
    confirmBookingButton.addEventListener('click', (e) => {
        console.log("Confirm Booking button clicked");
        form.dispatchEvent(new Event('submit'));
    });
});
