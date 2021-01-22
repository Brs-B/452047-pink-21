let menuMain = document.querySelector('.menu');
let menuToggle = document.querySelector('.menu__toggle');
let headerWrap = document.querySelector('.header__wrapper');

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

  menuToggle.addEventListener('click', function() {
    if (headerWrap.classList.contains('header__wrapper--wrap')) {
      headerWrap.classList.remove('header__wrapper--wrap');
      headerWrap.classList.add('header__wrapper--unwrap');
    } else {
      headerWrap.classList.add('header__wrapper--wrap');
      headerWrap.classList.remove('header__wrapper--unwrap');
    }
  });
