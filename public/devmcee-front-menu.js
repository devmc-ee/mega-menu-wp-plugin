;(() => {
  console.log('devmcee-front-menu-shortcode script loaded');
  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.devmcee-mega-menu__item-with-sub-menu');

    menuItems.forEach((menuItem) => {
      const details = menuItem.querySelector('.devmcee-mega-menu__sub-menu-details');

      menuItem.addEventListener('mouseover', () => details.open = true);
      menuItem.addEventListener('mouseleave', () => details.open = false);
    });
  });
})();