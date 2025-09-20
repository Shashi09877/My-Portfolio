// Dark Mode Toggle
const toggle = document.getElementById('toggle-dark');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Contact Form
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = "Thanks! Your message has been sent.";
  form.reset();
});
