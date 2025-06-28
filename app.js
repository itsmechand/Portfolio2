/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {})
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL PROJECTS*/
sr.reveal('.project-card', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 })

/*===== ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object with the form data
        const formData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };

        // Store the form data in localStorage
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });
}); 