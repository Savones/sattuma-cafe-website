// Hiding 2nd nav-bar when on home page

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

// Hide the navbar on page load
navbar.classList.add('hidden');

window.addEventListener('scroll', toggleNavbar);


// Scaling nav-bar according to font-size

// Function to scale the home-nav-bar width based on the font size
function scaleNavWidth() {
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const navBar = document.querySelector('.home-nav-bar');
  const navWidth = fontSize * 0.7; // 2% of the font size

  navBar.style.width = `${navWidth}%`; // Set the width as a percentage
}

// Call the function when the page loads and on window resize
window.addEventListener('load', scaleNavWidth);
window.addEventListener('resize', scaleNavWidth);


