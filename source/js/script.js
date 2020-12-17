let menuMain = document.querySelector('.menu');
let menuToggle = document.querySelector('.menu__toggle');

  menuMain.classList.remove('menu--nojs');

  menuToggle.addEventListener('click', function() {
    if (menuMain.classList.contains('menu--closed')) {
      menuMain.classList.remove('menu--closed');
      menuMain.classList.add('menu--opened');
    } else {
      menuMain.classList.add('menu--closed');
      menuMain.classList.remove('menu--opened');
    }
  });
