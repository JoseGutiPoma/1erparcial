document.addEventListener('DOMContentLoaded', function() {
    // Registration Form Handling
    const registrationForm = document.getElementById('registration-form');
    const registrationCard = document.getElementById('registration-card');
    const registrationSuccess = document.getElementById('registration-success');
    const registerAnother = document.getElementById('register-another');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.textContent = 'Registrando...';
            submitButton.disabled = true;
            
            setTimeout(function() {
                registrationCard.classList.add('hidden');
                registrationSuccess.classList.remove('hidden');
            }, 1500);
        });
    }
    
    if (registerAnother) {
        registerAnother.addEventListener('click', function() {
            registrationSuccess.classList.add('hidden');
            registrationCard.classList.remove('hidden');
            
            // Reset form
            registrationForm.reset();
            const submitButton = registrationForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Registrarse Ahora';
            submitButton.disabled = false;
        });
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const contactCard = document.getElementById('contact-card');
    const contactSuccess = document.getElementById('contact-success');
    const sendAnother = document.getElementById('send-another');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(function() {
                contactCard.classList.add('hidden');
                contactSuccess.classList.remove('hidden');
            }, 1500);
        });
    }
    
    if (sendAnother) {
        sendAnother.addEventListener('click', function() {
            contactSuccess.classList.add('hidden');
            contactCard.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.innerHTML = 'Enviar Mensaje <i class="fas fa-paper-plane"></i>';
            submitButton.disabled = false;
        });
    }
    
    // Tabs Handling
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Accordion Handling
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            
            // Toggle active class
            accordionItem.classList.toggle('active');
        });
    });
    
    // Map Rendering
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
        // This is a placeholder for Google Maps integration
        // In a real implementation, you would use the Google Maps API
        const renderMap = () => {
            const canvas = document.createElement('canvas');
            canvas.width = mapElement.clientWidth;
            canvas.height = 400;
            mapElement.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Draw a placeholder map
                ctx.fillStyle = '#e5e7eb';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw some roads
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 6;
                
                // Horizontal roads
                ctx.beginPath();
                ctx.moveTo(0, 100);
                ctx.lineTo(canvas.width, 100);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(0, 250);
                ctx.lineTo(canvas.width, 250);
                ctx.stroke();
                
                // Vertical roads
                ctx.beginPath();
                ctx.moveTo(200, 0);
                ctx.lineTo(200, canvas.height);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(500, 0);
                ctx.lineTo(500, canvas.height);
                ctx.stroke();
                
                // Draw the venue
                ctx.fillStyle = '#8b5cf6';
                ctx.beginPath();
                ctx.arc(350, 200, 30, 0, Math.PI * 2);
                ctx.fill();
                
                // Label the venue
                ctx.fillStyle = '#1f2937';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Centro de Innovación Tecnológica', 350, 200 + 60);
                
                // Add a pin icon
                ctx.fillStyle = '#ec4899';
                ctx.beginPath();
                ctx.moveTo(350, 170);
                ctx.lineTo(340, 190);
                ctx.lineTo(360, 190);
                ctx.closePath();
                ctx.fill();
                
                // Add a compass
                ctx.strokeStyle = '#1f2937';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(50, 50, 20, 0, Math.PI * 2);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(50, 30);
                ctx.lineTo(50, 70);
                ctx.moveTo(30, 50);
                ctx.lineTo(70, 50);
                ctx.stroke();
                
                ctx.fillStyle = '#1f2937';
                ctx.font = 'bold 12px Arial';
                ctx.fillText('N', 50, 30);
                ctx.fillText('S', 50, 75);
                ctx.fillText('O', 25, 54);
                ctx.fillText('E', 75, 54);
                
                // Add a scale
                ctx.fillStyle = '#1f2937';
                ctx.fillRect(canvas.width - 120, canvas.height - 30, 100, 10);
                ctx.font = '12px Arial';
                ctx.fillText('0', canvas.width - 120, canvas.height - 10);
                ctx.fillText('500 m', canvas.width - 30, canvas.height - 10);
            }
        };
        
        renderMap();
    }
    
    // Testimonials Slider
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const prevButton = document.querySelector('.testimonial-control.prev');
    const nextButton = document.querySelector('.testimonial-control.next');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialsSlider && prevButton && nextButton) {
        let currentIndex = 0;
        const cardWidth = testimonialsSlider.clientWidth;
        const maxIndex = testimonialCards.length - 1;
        
        // Set initial position
        updateSliderPosition();
        
        // Handle next button click
        nextButton.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSliderPosition();
            } else {
                // Loop back to the beginning
                currentIndex = 0;
                updateSliderPosition();
            }
        });
        
        // Handle prev button click
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            } else {
                // Loop to the end
                currentIndex = maxIndex;
                updateSliderPosition();
            }
        });
        
        // Update slider position based on current index
        function updateSliderPosition() {
            const scrollAmount = currentIndex * cardWidth;
            testimonialsSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Recalculate card width
            const newCardWidth = testimonialsSlider.clientWidth;
            
            // Update slider position with new dimensions
            const scrollAmount = currentIndex * newCardWidth;
            testimonialsSlider.scrollTo({
                left: scrollAmount,
                behavior: 'auto'
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});