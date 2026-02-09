// Carousel functionality
let currentSlideIndex = 0;
const bottleColors = [
    { primary: '#e8d4f0', secondary: '#d9a8f0' },
    { primary: '#d9a8f0', secondary: '#ff6b6b' },
    { primary: '#ff6b6b', secondary: '#ff8a80' },
    { primary: '#ffa726', secondary: '#ffb74d' }
];

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= 4) {
        currentSlideIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = 3;
    }
    updateCarousel();
}

function currentSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });

    // Update bottle color
    const bottle = document.getElementById('mainImage');
    if (bottle) {
        const colors = bottleColors[currentSlideIndex];
        bottle.style.background = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    
    // Add keyboard navigation for carousel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
});

// Tab switching for pricing
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.pricing-option');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Activate clicked button
    event.target.classList.add('active');
}

// Collection accordion
function toggleCollection(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    
    // Close other open items
    document.querySelectorAll('.collection-content').forEach(item => {
        if (item !== content) {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        }
    });

    // Toggle current item
    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '−' : '+';
}

// Smooth scroll for navigation links
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

// Search functionality
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchQuery = prompt('Search for fragrances:');
    if (searchQuery) {
        console.log('Searching for:', searchQuery);
        // Add search logic here
    }
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.newsletter-form input').value;
    if (email) {
        alert('Thank you for subscribing! Check your email: ' + email);
        document.querySelector('.newsletter-form input').value = '';
    }
});

// Add to cart button
document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    alert('Product added to cart!');
});

// Fragrance selection
document.querySelectorAll('.fragrance-option input[type="radio"]').forEach((radio, index) => {
    radio.addEventListener('change', () => {
        const images = document.querySelectorAll('.fragrance-image');
        images.forEach((img, i) => {
            img.style.borderColor = i === index ? '#1a5a3a' : 'transparent';
        });
    });
});

// Try Risk-Free button
document.querySelector('.try-risk-free').addEventListener('click', () => {
    alert('Start your risk-free trial today!');
});

// Mobile menu toggle (optional - can be expanded)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

console.log('GTG Perfumes website loaded successfully!');
