// ===================================
// Archyz Website - Custom JavaScript
// Handles navigation, forms, modals, filtering
// ===================================

// ===================================
// Global Variables
// ===================================
const productData = {
    'masala-chips': {
        title: 'Spicy Masala Chips',
        category: 'Chips',
        image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=400&fit=crop',
        description: 'Our signature Spicy Masala Chips are crafted from premium quality potatoes, sliced to perfection and fried until golden and crispy. Each chip is then seasoned with our proprietary blend of authentic Indian spices, creating a flavor explosion that keeps you coming back for more. Perfect for parties, movie nights, or any time you crave a satisfying snack.',
        specs: [
            'Weight: 100g, 200g, 500g packs available',
            'Ingredients: Potatoes, Palm Oil, Salt, Spice Mix (Red Chili, Cumin, Coriander, Black Pepper)',
            'Shelf Life: 6 months from manufacturing date',
            'Storage: Store in a cool, dry place',
            'No artificial colors or preservatives'
        ]
    },
    'salted-chips': {
        title: 'Classic Salted Chips',
        category: 'Chips',
        image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=400&fit=crop',
        description: 'Sometimes simplicity is perfection. Our Classic Salted Chips feature premium potatoes sliced thin and fried to a perfect golden crisp. Lightly dusted with sea salt, these chips let the natural potato flavor shine through. A timeless favorite that pairs well with any dip or enjoyed on their own.',
        specs: [
            'Weight: 100g, 200g, 500g packs available',
            'Ingredients: Potatoes, Palm Oil, Sea Salt',
            'Shelf Life: 6 months from manufacturing date',
            'Storage: Store in a cool, dry place',
            'Gluten-free and vegetarian'
        ]
    },
    'namkeen-mix': {
        title: 'Crunchy Namkeen Mix',
        category: 'Namkeen',
        image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=600&h=400&fit=crop',
        description: 'A traditional Indian savory snack mix that brings together the perfect combination of textures and flavors. Our Crunchy Namkeen Mix features roasted peanuts, fried lentils, crispy sev, and aromatic curry leaves, all seasoned with carefully balanced spices. Ideal for tea-time or as an anytime snack.',
        specs: [
            'Weight: 150g, 300g, 500g packs available',
            'Ingredients: Peanuts, Gram Flour, Lentils, Cashews, Curry Leaves, Spices',
            'Shelf Life: 4 months from manufacturing date',
            'Storage: Store in an airtight container',
            'Rich in protein and fiber'
        ]
    },
    'peanut-masala': {
        title: 'Peanut Masala',
        category: 'Namkeen',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop',
        description: 'Premium quality peanuts roasted to perfection and coated with our special masala blend. These crunchy, spicy treats are packed with protein and flavor, making them the ideal healthy snack option. Great for sharing during gatherings or enjoying during your work breaks.',
        specs: [
            'Weight: 100g, 250g, 500g packs available',
            'Ingredients: Peanuts, Gram Flour, Red Chili, Turmeric, Salt, Spices',
            'Shelf Life: 5 months from manufacturing date',
            'Storage: Store in a cool, dry place',
            'High in protein and energy'
        ]
    },
    'jaggery-bites': {
        title: 'Sweet Jaggery Bites',
        category: 'Sweet Treats',
        image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=600&h=400&fit=crop',
        description: 'Wholesome energy bites made with organic jaggery, mixed nuts, and seeds. These naturally sweet treats are perfect for satisfying your sweet tooth while providing sustained energy. Free from refined sugar, they\'re a healthier alternative that doesn\'t compromise on taste.',
        specs: [
            'Weight: 150g, 300g packs available',
            'Ingredients: Organic Jaggery, Almonds, Cashews, Dates, Sesame Seeds',
            'Shelf Life: 3 months from manufacturing date',
            'Storage: Store in an airtight container',
            'No refined sugar, rich in iron and calcium'
        ]
    },
    'coconut-cookies': {
        title: 'Coconut Cookies',
        category: 'Sweet Treats',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        description: 'Crispy, buttery cookies studded with real coconut flakes for that authentic tropical taste. Each cookie is baked to golden perfection, offering a delightful crunch with every bite. Perfect with a cup of chai or coffee, or as a sweet treat any time of the day.',
        specs: [
            'Weight: 200g, 400g packs available',
            'Ingredients: Wheat Flour, Butter, Sugar, Coconut Flakes, Baking Powder',
            'Shelf Life: 4 months from manufacturing date',
            'Storage: Store in an airtight container',
            'Made with real butter and coconut'
        ]
    },
    'tomato-chips': {
        title: 'Tangy Tomato Chips',
        category: 'Chips',
        image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=600&h=400&fit=crop',
        description: 'Experience the perfect balance of tangy and savory with our Tangy Tomato Chips. Made from premium potatoes and seasoned with real tomato powder and herbs, these chips offer a unique flavor profile that stands out from the ordinary. A crowd-pleaser at every gathering.',
        specs: [
            'Weight: 100g, 200g, 500g packs available',
            'Ingredients: Potatoes, Palm Oil, Tomato Powder, Herbs, Salt, Spices',
            'Shelf Life: 6 months from manufacturing date',
            'Storage: Store in a cool, dry place',
            'Made with real tomato powder'
        ]
    },
    'bhujia-sev': {
        title: 'Bhujia Sev',
        category: 'Namkeen',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop',
        description: 'Traditional Indian bhujia sev made from the finest gram flour, our recipe has been perfected over years of expertise. These fine, crispy noodles are seasoned with authentic spices, creating the perfect accompaniment for any meal or a satisfying standalone snack.',
        specs: [
            'Weight: 150g, 300g, 500g packs available',
            'Ingredients: Gram Flour, Palm Oil, Salt, Red Chili, Turmeric, Asafoetida',
            'Shelf Life: 4 months from manufacturing date',
            'Storage: Store in an airtight container',
            'Traditional recipe, no artificial additives'
        ]
    },
    'chocolate-cookies': {
        title: 'Chocolate Chip Cookies',
        category: 'Sweet Treats',
        image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=400&fit=crop',
        description: 'Classic chocolate chip cookies loaded with premium chocolate chips. Soft, chewy centers with slightly crispy edges make these cookies irresistible. Made with quality ingredients and baked fresh, they\'re perfect for satisfying your chocolate cravings any time of the day.',
        specs: [
            'Weight: 200g, 400g packs available',
            'Ingredients: Wheat Flour, Butter, Sugar, Chocolate Chips, Eggs, Vanilla',
            'Shelf Life: 4 months from manufacturing date',
            'Storage: Store in an airtight container',
            'Contains real chocolate chips'
        ]
    }
};

// ===================================
// DOM Elements
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initSmoothScroll();
    initProductFilter();
    initProductModals();
    initContactForm();
});

// ===================================
// Navigation Menu Toggle
// ===================================
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = navMenu.classList.contains('active') 
                ? 'rotate(-45deg) translate(-6px, 6px)' 
                : 'none';
            bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = navMenu.classList.contains('active') 
                ? 'rotate(45deg) translate(-6px, -6px)' 
                : 'none';
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                // Reset hamburger animation
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
    });

    // Add sticky navbar effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

// ===================================
// Smooth Scrolling
// ===================================
function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Product Filter (Products Page)
// ===================================
function initProductFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    // Add fade-in animation
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===================================
// Product Modals
// ===================================
function initProductModals() {
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (!modal) return;

    // Open modal on button click
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const product = productData[productId];

            if (product) {
                // Build modal content
                const modalContent = `
                    <img src="${product.image}" alt="${product.title}" class="modal-product-image">
                    <h2 class="modal-product-title">${product.title}</h2>
                    <span class="modal-product-category">${product.category}</span>
                    <p class="modal-product-description">${product.description}</p>
                    <div class="modal-product-specs">
                        <h4><i class="fas fa-info-circle"></i> Product Specifications</h4>
                        <ul>
                            ${product.specs.map(spec => `
                                <li><i class="fas fa-check-circle"></i> ${spec}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <a href="contact.html" class="btn btn-primary btn-large btn-block">
                        <i class="fas fa-envelope"></i> Request a Quote
                    </a>
                `;

                modalBody.innerHTML = modalContent;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===================================
// Contact Form Validation & Submission
// ===================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate name
        if (name === '') {
            showError('nameError', 'Please enter your full name');
            isValid = false;
        } else if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError('emailError', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate phone (optional, but if provided must be valid)
        if (phone !== '' && !isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }

        // Validate subject
        if (subject === '') {
            showError('subjectError', 'Please select a subject');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            showError('messageError', 'Please enter your message');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }

        // If validation passes, simulate form submission
        if (isValid) {
            submitForm(name, email, phone, subject, message);
        }
    });
}

// Helper Functions for Form Validation
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    const inputElement = errorElement.previousElementSibling;
    
    errorElement.textContent = message;
    errorElement.classList.add('active');
    inputElement.classList.add('error');
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    const inputElements = document.querySelectorAll('.form-input');
    
    errorElements.forEach(error => {
        error.textContent = '';
        error.classList.remove('active');
    });
    
    inputElements.forEach(input => {
        input.classList.remove('error');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Allow common phone formats: +91 1234567890, 1234567890, +1-234-567-8900, etc.
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,10}$/;
    return phoneRegex.test(phone);
}

function submitForm(name, email, phone, subject, message) {
    // Show loading state
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate API call with timeout
    setTimeout(function() {
        // Reset button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        // Show success message
        showSuccessMessage(name);

        // Reset form
        document.getElementById('contactForm').reset();
    }, 1500);
}

function showSuccessMessage(name) {
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #10b981;
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 500px;
        text-align: center;
        animation: slideDown 0.3s ease;
    `;
    
    alertDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
            <div>
                <h4 style="margin: 0 0 0.25rem 0; font-size: 1.125rem; font-weight: 600;">Thank You, ${name}!</h4>
                <p style="margin: 0; font-size: 0.9375rem;">Your message has been received. We'll get back to you within 24 hours.</p>
            </div>
        </div>
    `;

    // Add animation keyframes if not already added
    if (!document.getElementById('alertAnimations')) {
        const style = document.createElement('style');
        style.id = 'alertAnimations';
        style.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            @keyframes slideUp {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(alertDiv);

    // Remove alert after 5 seconds
    setTimeout(function() {
        alertDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(function() {
            alertDiv.remove();
        }, 300);
    }, 5000);
}

// ===================================
// Fade-in animation on scroll
// ===================================
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards, product cards, team cards
    const elementsToObserve = document.querySelectorAll(
        '.feature-card, .product-card, .team-card, .value-item, .mv-card'
    );

    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Initialize scroll animations after page load
window.addEventListener('load', observeElements);

// ===================================
// Utility: Scroll to Top Button (Optional)
// ===================================
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #10b981;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    scrollBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#059669';
        this.style.transform = 'translateY(-3px)';
    });

    scrollBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#10b981';
        this.style.transform = 'translateY(0)';
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
}

// Initialize scroll to top button
initScrollToTop();

// ===================================
// Console Message
// ===================================
console.log('%c🍪 Welcome to Archyz! ', 'background: #1e3a8a; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%cWebsite crafted with ❤️ in Bengaluru, India', 'color: #10b981; font-size: 14px;');