/* ==========================================
   IronPulse Fitness Interactive Script
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('IronPulse Gym Static Site Loaded.');

  // Membership / Contact Form Interactivity
  const contactForm = document.getElementById('membershipForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const plan = document.getElementById('planSelect').value;

      if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = 'Processing Application...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert(`Welcome to IronPulse, ${name}! Your ${plan} membership application has been submitted successfully.`);
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // Active Navigation Highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
