document.addEventListener('DOMContentLoaded', function() {

  const navbar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');
  const ulList = document.getElementById('ul-list');
  const iconList = document.getElementById('icon-list');
  const navLinks = ulList.querySelectorAll('a');

  const scrollOffset = 100; // Adjust this value as needed

  function toggleNavbar() {
    const homeSectionHeight = homeSection.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= homeSectionHeight) {
      navbar.classList.remove('hidden');
      ulList.classList.remove('ul-list-hidden');
      iconList.classList.add('icon-list-hidden');
      ulList.style.height = 'auto';
    } else {
      navbar.classList.add('hidden');
      ulList.classList.add('ul-list-hidden');
      iconList.classList.remove('icon-list-hidden');
      ulList.style.height = homeSectionHeight + 'px';
    }

    // Remove active class from all nav links
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].parentNode.classList.remove('active');
    }

    // Add active class to the nav link corresponding to the current section
    for (var i = 0; i < navLinks.length; i++) {
      const sectionId = navLinks[i].getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      const sectionTop = section.offsetTop - scrollOffset; // Apply the offset
      const sectionHeight = section.offsetHeight;

      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        navLinks[i].parentNode.classList.add('active');
      }
    }
  }

  // Clicking icons in nav-bar doesn't scroll to top
  const iconLinks = document.querySelectorAll('.icon-link a');
  iconLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default scrolling behavior
      // You can add additional logic here if needed
    });
  });

   // Login form toggle
  const userIcon = document.getElementById('userIcon');
  const loginFormContainer = document.getElementById('loginFormContainer');
  const closeButton = document.getElementById('closeButton');
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  function setActiveButton(button) {
    loginButton.classList.remove('active');
    registerButton.classList.remove('active');
    button.classList.add('active');
  }

  function showLoginForm() {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
  }

  function showRegisterForm() {
    registerForm.style.display = 'flex';
    loginForm.style.display = 'none';
  }

  userIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    loginFormContainer.style.display = 'flex';
    document.body.classList.add('login-form-open');
    setActiveButton(loginButton);
    showLoginForm();
  });

  closeButton.addEventListener('click', function() {
    loginFormContainer.style.display = 'none';
    document.body.classList.remove('login-form-open');
  });

  loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveButton(loginButton);
    showLoginForm();
  });

  registerButton.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveButton(registerButton);
    showRegisterForm();
  });

  // Hide the login form on page load
  loginFormContainer.style.display = 'none';

  // Hide the navbar on page load
  navbar.classList.add('hidden');
  ulList.classList.add('ul-list-hidden');
  ulList.style.height = homeSection.clientHeight + 'px';

  window.addEventListener('scroll', toggleNavbar);
  window.addEventListener('resize', toggleNavbar);
});
