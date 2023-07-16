
document.addEventListener('DOMContentLoaded', function() {

  const navbar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');
  const ulList = document.getElementById('ul-list');
  const navLinks = ulList.querySelectorAll('a');
  const scrollOffset = 100; // Adjust this value as needed

  function toggleNavbar() {
    const homeSectionHeight = homeSection.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= homeSectionHeight) {
      navbar.classList.remove('hidden');
      ulList.classList.remove('ul-list-hidden');
      ulList.style.height = 'auto';
    } else {
      navbar.classList.add('hidden');
      ulList.classList.add('ul-list-hidden');
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

  // Hide the navbar on page load
  navbar.classList.add('hidden');
  ulList.classList.add('ul-list-hidden');
  ulList.style.height = homeSection.clientHeight + 'px';

  window.addEventListener('scroll', toggleNavbar);
  window.addEventListener('resize', toggleNavbar);

});