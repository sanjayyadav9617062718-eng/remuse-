// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-container')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Form submission handler
document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('vName').value.trim();
  const email = document.getElementById('vEmail').value.trim();
  const message = document.getElementById('vMessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields');
    return;
  }

  // Create WhatsApp message
  const whatsappMessage = `Hello Sanjay,%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Message:* ${encodeURIComponent(message)}`;
  
  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/91961702718?text=${whatsappMessage}`, '_blank');
  
  // Reset form
  this.reset();
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);