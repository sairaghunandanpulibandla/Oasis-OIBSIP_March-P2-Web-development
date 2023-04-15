// When the page loads
window.onload = function() {
    // Toggle the mobile menu when the user clicks the hamburger icon
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  
    // Smooth scrolling to section when user clicks on navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        const yOffset = -80; // adjust as needed based on your header size
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  
    // Show/hide back-to-top button depending on scroll position
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
  
    // Submit form and show success message
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email');
      const messageInput = document.querySelector('#message');
      const successMsg = document.querySelector('.success-msg');
  
      // TODO: Add form validation code here
  
      // Simulate submitting form data
      setTimeout(function() {
        successMsg.classList.add('show');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      }, 1000);
    });
  
    // Close success message
    const closeSuccessMsgBtn = document.querySelector('.close-success-msg-btn');
    closeSuccessMsgBtn.addEventListener('click', function() {
      successMsg.classList.remove('show');
    });
  };
  