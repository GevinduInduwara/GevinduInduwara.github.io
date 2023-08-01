/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#contact-form input[type='text']");
    const emailInput = document.querySelector("#contact-form input[type='email']");
    const messageInput = document.querySelector("#contact-form textarea");

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email");
        return;
    }

    if (messageInput.value.trim() === "") {
        alert("Please enter your message");
        return;
    }

    // If all validations pass, show the alert and reset the form
    showAlert();
    form.reset();
});

function showAlert() {
    alert("Your message is sent!");
}





document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch(form.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Email sent successfully.');
        form.reset();
      } else {
        alert('Failed to send email.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit the form.');
    });
  });
});




$('.skills').waypoint(function () {
  $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {offset: '80%'});



//reload

const logo = document.getElementById('logo');
const reloadButton = document.getElementById('reloadButton');

logo.addEventListener('click', (event) => {
  event.preventDefault(); // Prevents the default behavior of the link
  
  reloadButton.classList.add('show');
  setTimeout(() => {
    location.reload();
  }, 1000);
});

reloadButton.addEventListener('click', () => {
  reloadButton.classList.remove('show');
});

document.addEventListener('click', (event) => {
  if (!logo.contains(event.target) && !reloadButton.contains(event.target)) {
    reloadButton.classList.remove('show');
  }
});


///scroll btn


const scrollup = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollup.classList.add('show');
  } else {
    scrollup.classList.remove('show');
  }
});

scrollup.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//night mode 
function toggleNightMode() {
  document.body.classList.toggle("night-mode");
}