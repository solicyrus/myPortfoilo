// =========== Smooth Scroll for Navbar Links ===========
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// =========== Sticky Header on Scroll ===========
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// =========== Dynamic Gallery ===========
const galleryContainer = document.getElementById('gallery');
const images = Array.from({ length: 9 }, (_, i) => `images/thumb/thumbnail_${i+1}.jpg`);

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Gallery Image';
  img.className = 'gallery-item';
  galleryContainer.appendChild(img);
});

// =========== Modal Viewer ===========
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

galleryContainer.addEventListener('click', e => {
  if (e.target.classList.contains('gallery-item')) {
    modal.classList.add('open');
    modalImg.src = e.target.src;
  }
});
modal.addEventListener('click', () => modal.classList.remove('open'));

// =========== Contact Form Validation ===========
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!name || !email || !message) {
    alert('full up field');
    return;
  }
  if (!emailRegex.test(email)) {
    alert('valid email ');
    return;
  }

  alert(' Massage sent successfully ');
  contactForm.reset();
});

// =========== Button Hover Effects ===========
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('mouseover', () => btn.classList.add('hovered'));
  btn.addEventListener('mouseout', () => btn.classList.remove('hovered'));
});
