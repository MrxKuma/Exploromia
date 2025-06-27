const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Burger Animation
      burger.classList.toggle('toggle');
    });
  };
  
  const hideNavbar = () => {
    const navbar = document.getElementById('navbar');
    let prevScrollPos = window.pageYOffset;
  
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = '-100px';
      }
      prevScrollPos = currentScrollPos;
    };
  };
  
  navSlide();
  hideNavbar();

  