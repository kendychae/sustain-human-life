// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Image Carousel
    const carousel = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (carousel && images.length > 0) {
        let currentIndex = 0;
        
        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.carousel-dot');
        
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Auto-rotate carousel every 5 seconds
        setInterval(nextSlide, 5000);
    }
    
    // Easter Egg - Healthy Families Logo
    const logo = document.getElementById('healthy-families-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.classList.add('easter-egg-active');
            createConfetti();
            playSound('celebration');
            setTimeout(() => this.classList.remove('easter-egg-active'), 500);
        });
    }
    
    // Easter Egg - Author Name
    const authorName = document.querySelector('.author-name');
    if (authorName) {
        let clickCount = 0;
        authorName.addEventListener('click', function() {
            clickCount++;
            this.classList.add('easter-egg-active');
            
            if (clickCount === 1) {
                createHearts();
            } else if (clickCount === 2) {
                createSparkles();
            } else if (clickCount >= 3) {
                createFireworks();
                clickCount = 0; // Reset
            }
            
            setTimeout(() => this.classList.remove('easter-egg-active'), 500);
        });
    }
    
    // Confetti Effect
    function createConfetti() {
        const colors = ['#e91e63', '#f06292', '#f8bbd0', '#c2185b', '#ff4081'];
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }
    
    // Hearts Effect
    function createHearts() {
        const hearts = ['💖', '💗', '💓', '💕', '💝'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                heart.style.animation = 'floatUp 3s ease-out forwards';
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 3000);
            }, i * 50);
        }
        
        // Add float up animation if not exists
        if (!document.getElementById('float-up-style')) {
            const style = document.createElement('style');
            style.id = 'float-up-style';
            style.textContent = `
                @keyframes floatUp {
                    to {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Sparkles Effect
    function createSparkles() {
        const sparkles = ['✨', '⭐', '🌟', '💫', '🌠'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
                sparkle.style.position = 'fixed';
                sparkle.style.left = Math.random() * 100 + 'vw';
                sparkle.style.top = Math.random() * 100 + 'vh';
                sparkle.style.fontSize = (Math.random() * 15 + 15) + 'px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '9999';
                sparkle.style.animation = 'sparkleEffect 1.5s ease-out forwards';
                document.body.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1500);
            }, i * 30);
        }
        
        // Add sparkle animation if not exists
        if (!document.getElementById('sparkle-style')) {
            const style = document.createElement('style');
            style.id = 'sparkle-style';
            style.textContent = `
                @keyframes sparkleEffect {
                    0% { transform: scale(0) rotate(0deg); opacity: 1; }
                    50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
                    100% { transform: scale(0) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Fireworks Effect
    function createFireworks() {
        const emojis = ['🎉', '🎊', '🎆', '🎇', '✨', '🌟', '💖', '🎈'];
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                firework.style.position = 'fixed';
                firework.style.left = '50vw';
                firework.style.top = '50vh';
                firework.style.fontSize = (Math.random() * 20 + 25) + 'px';
                firework.style.pointerEvents = 'none';
                firework.style.zIndex = '9999';
                
                const angle = (i / 40) * 360;
                const distance = Math.random() * 300 + 200;
                firework.style.animation = `explode${i} 1.5s ease-out forwards`;
                
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes explode${i} {
                        to {
                            transform: translate(${Math.cos(angle * Math.PI / 180) * distance}px, ${Math.sin(angle * Math.PI / 180) * distance}px) rotate(720deg);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(firework);
                
                setTimeout(() => {
                    firework.remove();
                    style.remove();
                }, 1500);
            }, i * 20);
        }
    }
    
    // Sound effect (silent placeholder - can be replaced with actual sounds)
    function playSound(type) {
        // Placeholder for sound effects
        // In a real implementation, you could use Web Audio API or audio files
        console.log(`Playing ${type} sound effect!`);
    }
    
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#main-content') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .meal-card, .recipe-card, .tip-category, .resource-card').forEach(el => {
        observer.observe(el);
    });
    
    // Lazy load images when they become visible
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
});
