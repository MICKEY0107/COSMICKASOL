// CosmicKasol JavaScript

// Application Data
const appData = {
  "events": [
    {
      "id": 1,
      "title": "Cosmic Trance Festival",
      "date": "25-28 Dec 2025",
      "location": "Chhalal Village",
      "price": 2000,
      "description": "A 4-day psychedelic trance festival featuring international and local DJs in the mystical valley of Kasol",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1748973871/gpt4o_images/slywyw6q1vtdycy9unlh.png",
      "genre": "Psychedelic Trance",
      "artists": ["Ace Ventura", "Captain Hook", "Liquid Soul", "Vini Vici"],
      "capacity": 1500,
      "status": "Open",
      "countdown": "2025-12-25T20:00:00"
    },
    {
      "id": 2,
      "title": "Himalayan Bass Festival",
      "date": "15-17 Feb 2026",
      "location": "Pirates of Parvati",
      "price": 1500,
      "description": "Bass heavy electronic music festival with stunning mountain views",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1748973871/gpt4o_images/slywyw6q1vtdycy9unlh.png",
      "genre": "Bass/Dubstep",
      "artists": ["Excision", "Zomboy", "Space Laces", "SVDDEN DEATH"],
      "capacity": 800,
      "status": "Early Bird",
      "countdown": "2026-02-15T19:00:00"
    },
    {
      "id": 3,
      "title": "Parvati Calling VIII",
      "date": "1-5 Oct 2025",
      "location": "Parvati Valley",
      "price": 8999,
      "description": "The ultimate gathering of cosmic consciousness with 5 days of music, workshops, and spiritual experiences",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1748973871/gpt4o_images/slywyw6q1vtdycy9unlh.png",
      "genre": "Psytrance/Progressive",
      "artists": ["Shpongle", "Ott", "Hallucinogen", "Infected Mushroom"],
      "capacity": 3000,
      "status": "Limited",
      "countdown": "2025-10-01T10:00:00"
    }
  ],
  "rooms": [
    {
      "id": 1,
      "name": "Cosmic Deluxe Room",
      "type": "Deluxe",
      "capacity": 2,
      "price": 3500,
      "description": "Spacious room with mountain views, cosmic decor, and modern amenities",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1748973950/gpt4o_images/v9ucsyaesm5t3wbeuoln.png",
      "amenities": ["WiFi", "Balcony", "Mountain View", "Mini Bar", "AC", "Cosmic Lighting"],
      "size": "400 sq ft",
      "available": true
    },
    {
      "id": 2,
      "name": "Galaxy Suite",
      "type": "Suite",
      "capacity": 4,
      "price": 6500,
      "description": "Luxury suite with panoramic valley views and holographic amenities",
      "image": "https://pplx-res.cloudinary.com/image/upload/v1748973950/gpt4o_images/v9ucsyaesm5t3wbeuoln.png",
      "amenities": ["WiFi", "Living Room", "Valley View", "Kitchenette", "Jacuzzi", "Holographic TV"],
      "size": "800 sq ft",
      "available": true
    }
  ],
  "adventures": [
    {
      "id": 1,
      "name": "Cosmic Paragliding",
      "price": 2500,
      "duration": "2 hours",
      "description": "Soar through the cosmic skies with tandem paragliding over Parvati Valley",
      "difficulty": "Beginner",
      "includes": ["Equipment", "Instructor", "Photos", "Certificate"]
    },
    {
      "id": 2,
      "name": "Kheerganga Trek",
      "price": 1800,
      "duration": "2 days",
      "description": "Trek to the mystical hot springs of Kheerganga with cosmic guides",
      "difficulty": "Moderate",
      "includes": ["Guide", "Camping", "Meals", "First Aid"]
    }
  ],
  "gallery": [
    {
      "category": "Events",
      "images": [
        {
          "url": "https://pplx-res.cloudinary.com/image/upload/v1748973871/gpt4o_images/slywyw6q1vtdycy9unlh.png",
          "caption": "Cosmic Trance Festival 2024 - Main Stage",
          "tags": ["festival", "music", "lights"]
        },
        {
          "url": "https://pplx-res.cloudinary.com/image/upload/v1748973825/gpt4o_images/aaqcvjqkvtcmiwou5gkr.png",
          "caption": "Festival crowd under cosmic lights",
          "tags": ["festival", "crowd", "night"]
        }
      ]
    },
    {
      "category": "Nature", 
      "images": [
        {
          "url": "https://pplx-res.cloudinary.com/image/upload/v1748973825/gpt4o_images/aaqcvjqkvtcmiwou5gkr.png",
          "caption": "Mystical Kasol valley at cosmic sunset",
          "tags": ["nature", "valley", "sunset"]
        },
        {
          "url": "https://pplx-res.cloudinary.com/image/upload/v1748973950/gpt4o_images/v9ucsyaesm5t3wbeuoln.png",
          "caption": "Mountain peaks in the cosmic glow",
          "tags": ["mountains", "peaks", "glow"]
        }
      ]
    },
    {
      "category": "Accommodation",
      "images": [
        {
          "url": "https://pplx-res.cloudinary.com/image/upload/v1748973950/gpt4o_images/v9ucsyaesm5t3wbeuoln.png",
          "caption": "Cosmic suite with panoramic views",
          "tags": ["room", "luxury", "view"]
        }
      ]
    }
  ],
  "blog": [
    {
      "id": 1,
      "title": "Top 5 Hidden Trails in Parvati Valley",
      "excerpt": "Discover the mystical paths less traveled in the cosmic valley of Kasol",
      "author": "Cosmic Explorer",
      "date": "2025-05-15",
      "category": "Travel",
      "readTime": "5 min read"
    },
    {
      "id": 2,
      "title": "The Ultimate Guide to Psychedelic Festivals",
      "excerpt": "Everything you need to know about experiencing trance festivals in the Himalayas",
      "author": "Festival Guru", 
      "date": "2025-05-10",
      "category": "Festivals",
      "readTime": "8 min read"
    }
  ]
};

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('booking-modal');
const modalBody = document.getElementById('modal-body');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateContent();
    startCountdowns();
});

function initializeApp() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function setupEventListeners() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Tab switching for quick booking
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${target}-tab`).classList.add('active');
        });
    });

    // Event filters
    const genreFilter = document.getElementById('genre-filter');
    const priceFilter = document.getElementById('price-filter');

    if (genreFilter) {
        genreFilter.addEventListener('change', filterEvents);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterEvents);
    }

    // Gallery filters
    const galleryFilters = document.querySelectorAll('.filter-btn');
    galleryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            galleryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            filterGallery(filter);
        });
    });

    // Modal close events
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    document.querySelectorAll('.lightbox-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeLightbox);
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Hero scroll button
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            document.querySelector('#events').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function populateContent() {
    populateEvents();
    populateRooms();
    populateAdventures();
    populateGallery();
    populateBlog();
}

function populateEvents() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    eventsGrid.innerHTML = '';

    appData.events.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('data-genre', event.genre);
    card.setAttribute('data-price', event.price);

    card.innerHTML = `
        <div class="event-card-inner">
            <div class="event-card-front">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-overlay">
                    <h3>${event.title}</h3>
                    <p>${event.date}</p>
                    <span class="status status--${getStatusClass(event.status)}">${event.status}</span>
                </div>
            </div>
            <div class="event-card-back">
                <h3>${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-details">
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p><strong>Genre:</strong> ${event.genre}</p>
                    <p><strong>Artists:</strong> ${event.artists.join(', ')}</p>
                    <div class="countdown" data-countdown="${event.countdown}">
                        <span class="countdown-text">Loading...</span>
                    </div>
                    <div class="event-price">₹${event.price.toLocaleString()}</div>
                </div>
                <button class="btn btn--primary cosmic-glow" onclick="openBookingModal(${event.id}, 'event')">
                    Book Tickets
                </button>
            </div>
        </div>
    `;

    return card;
}

function populateRooms() {
    const roomsGrid = document.getElementById('rooms-grid');
    if (!roomsGrid) return;

    roomsGrid.innerHTML = '';

    appData.rooms.forEach(room => {
        const roomCard = createRoomCard(room);
        roomsGrid.appendChild(roomCard);
    });
}

function createRoomCard(room) {
    const card = document.createElement('div');
    card.className = 'room-card';

    card.innerHTML = `
        <div class="room-image">
            <img src="${room.image}" alt="${room.name}">
        </div>
        <div class="room-content">
            <h3>${room.name}</h3>
            <div class="room-price">₹${room.price.toLocaleString()}/night</div>
            <p>${room.description}</p>
            <div class="room-details">
                <p><strong>Capacity:</strong> ${room.capacity} guests</p>
                <p><strong>Size:</strong> ${room.size}</p>
                <p><strong>Type:</strong> ${room.type}</p>
            </div>
            <div class="amenities">
                ${room.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
            </div>
            <button class="btn btn--primary btn--full-width cosmic-glow" onclick="openBookingModal(${room.id}, 'room')" style="margin-top: 1rem;">
                Book Now
            </button>
        </div>
    `;

    return card;
}

function populateAdventures() {
    const adventuresGrid = document.getElementById('adventures-grid');
    if (!adventuresGrid) return;

    adventuresGrid.innerHTML = '';

    appData.adventures.forEach(adventure => {
        const adventureCard = createAdventureCard(adventure);
        adventuresGrid.appendChild(adventureCard);
    });
}

function createAdventureCard(adventure) {
    const card = document.createElement('div');
    card.className = 'adventure-card';

    card.innerHTML = `
        <h4>${adventure.name}</h4>
        <div class="adventure-price">₹${adventure.price.toLocaleString()}</div>
        <p>${adventure.description}</p>
        <div class="adventure-details">
            <p><strong>Duration:</strong> ${adventure.duration}</p>
            <p><strong>Difficulty:</strong> ${adventure.difficulty}</p>
            <p><strong>Includes:</strong> ${adventure.includes.join(', ')}</p>
        </div>
        <button class="btn btn--outline btn--full-width" onclick="openBookingModal(${adventure.id}, 'adventure')" style="margin-top: 1rem;">
            Add to Package
        </button>
    `;

    return card;
}

function populateGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    appData.gallery.forEach(category => {
        category.images.forEach(image => {
            const galleryItem = createGalleryItem(image, category.category);
            galleryGrid.appendChild(galleryItem);
        });
    });
}

function createGalleryItem(image, category) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', category);

    item.innerHTML = `
        <img src="${image.url}" alt="${image.caption}" loading="lazy">
        <div class="gallery-overlay">
            <p>${image.caption}</p>
        </div>
    `;

    // Add click event listener for lightbox
    item.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(image.url, image.caption);
    });

    return item;
}

function populateBlog() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';

    appData.blog.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';

    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        <div class="blog-meta">
            <span>${post.category}</span>
            <span>${date}</span>
            <span>${post.readTime}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="blog-author">
            <strong>By ${post.author}</strong>
        </div>
        <button class="btn btn--outline" style="margin-top: 1rem;">
            Read More
        </button>
    `;

    return card;
}

function filterEvents() {
    const genreFilter = document.getElementById('genre-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        let showCard = true;

        // Filter by genre
        if (genreFilter && card.getAttribute('data-genre') !== genreFilter) {
            showCard = false;
        }

        // Filter by price
        if (priceFilter) {
            const price = parseInt(card.getAttribute('data-price'));
            if (priceFilter === '0-2000' && price > 2000) showCard = false;
            if (priceFilter === '2000-5000' && (price <= 2000 || price > 5000)) showCard = false;
            if (priceFilter === '5000+' && price <= 5000) showCard = false;
        }

        card.style.display = showCard ? 'block' : 'none';
    });
}

function filterGallery(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            // Add a slight animation
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 100);
        } else {
            item.style.display = 'none';
        }
    });
}

function openBookingModal(id, type) {
    let item;
    let title = 'Booking';

    switch (type) {
        case 'event':
            item = appData.events.find(e => e.id === id);
            title = 'Event Booking';
            break;
        case 'room':
            item = appData.rooms.find(r => r.id === id);
            title = 'Room Booking';
            break;
        case 'adventure':
            item = appData.adventures.find(a => a.id === id);
            title = 'Adventure Booking';
            break;
    }

    if (!item) return;

    modal.querySelector('h2').textContent = title;
    modalBody.innerHTML = createBookingForm(item, type);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function createBookingForm(item, type) {
    let formContent = `
        <div class="booking-item-details">
            <h3>${item.title || item.name}</h3>
            <p>${item.description}</p>
    `;

    if (type === 'event') {
        formContent += `
            <div class="item-details">
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Price:</strong> ₹${item.price.toLocaleString()}</p>
            </div>
        `;
    } else if (type === 'room') {
        formContent += `
            <div class="item-details">
                <p><strong>Capacity:</strong> ${item.capacity} guests</p>
                <p><strong>Size:</strong> ${item.size}</p>
                <p><strong>Price:</strong> ₹${item.price.toLocaleString()}/night</p>
            </div>
        `;
    } else if (type === 'adventure') {
        formContent += `
            <div class="item-details">
                <p><strong>Duration:</strong> ${item.duration}</p>
                <p><strong>Difficulty:</strong> ${item.difficulty}</p>
                <p><strong>Price:</strong> ₹${item.price.toLocaleString()}</p>
            </div>
        `;
    }

    formContent += `
        </div>
        <form class="booking-form-modal">
            <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-control" required>
            </div>
    `;

    if (type === 'event') {
        formContent += `
            <div class="form-group">
                <label class="form-label">Number of Tickets</label>
                <select class="form-control" required>
                    <option value="">Select tickets</option>
                    <option value="1">1 Ticket</option>
                    <option value="2">2 Tickets</option>
                    <option value="3">3 Tickets</option>
                    <option value="4">4 Tickets</option>
                    <option value="5+">5+ Tickets</option>
                </select>
            </div>
        `;
    } else if (type === 'room') {
        formContent += `
            <div class="form-group">
                <label class="form-label">Check-in Date</label>
                <input type="date" class="form-control" required>
            </div>
            <div class="form-group">
                <label class="form-label">Check-out Date</label>
                <input type="date" class="form-control" required>
            </div>
            <div class="form-group">
                <label class="form-label">Number of Guests</label>
                <select class="form-control" required>
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                </select>
            </div>
        `;
    }

    formContent += `
            <div class="form-group">
                <label class="form-label">Special Requests</label>
                <textarea class="form-control" rows="3" placeholder="Any special requirements or requests..."></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--full-width cosmic-glow">
                Confirm Booking
            </button>
        </form>
    `;

    return formContent;
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openLightbox(src, caption) {
    if (lightboxImg && lightboxCaption && lightbox) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add fade-in animation
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.transition = 'opacity 0.3s ease';
            lightbox.style.opacity = '1';
        }, 10);
    }
}

function closeLightbox() {
    if (lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function startCountdowns() {
    const countdowns = document.querySelectorAll('[data-countdown]');
    
    countdowns.forEach(countdown => {
        const targetDate = new Date(countdown.getAttribute('data-countdown')).getTime();
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdown.querySelector('.countdown-text').innerHTML = 'Event Started!';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdown.querySelector('.countdown-text').innerHTML = 
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
}

function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case 'open': return 'success';
        case 'limited': return 'warning';
        case 'early bird': return 'info';
        case 'sold out': return 'error';
        default: return 'info';
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            e.target.reset();
        }, 2000);
    }, 1000);
}

// Handle booking form submissions
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('booking-form-modal')) {
        e.preventDefault();
        
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        // Simulate booking process
        setTimeout(() => {
            submitBtn.textContent = 'Booking Confirmed!';
            submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                closeModal();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 2000);
        }, 1500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const heroImg = document.querySelector('.hero-img');
    if (heroImg) {
        heroImg.style.transform = `translateY(${rate}px)`;
    }
});

// Add cosmic particle effect
function createCosmicParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'cosmic-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: radial-gradient(circle, #8A2BE2, #FF00FF);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s infinite linear;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        particleContainer.appendChild(particle);
    }

    document.body.appendChild(particleContainer);

    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize cosmic particles
createCosmicParticles();

// Make functions globally accessible for onclick handlers
window.openBookingModal = openBookingModal;