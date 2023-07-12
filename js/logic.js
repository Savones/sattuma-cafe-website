const navbar = document.getElementById('navbar');
const homeSection = document.getElementById('home');

function toggleNavbar() {
  const homeSectionHeight = homeSection.clientHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= homeSectionHeight) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
}

window.addEventListener('scroll', toggleNavbar);


