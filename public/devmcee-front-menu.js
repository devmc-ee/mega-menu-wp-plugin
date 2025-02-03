; (() => {
  let windowWidth = window.innerWidth;
  window.addEventListener('resize', () => windowWidth = window.innerWidth);
  const DESKTOP_WIDTH = 1024;
  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.devmcee-mega-menu__item-with-sub-menu');

    menuItems.forEach((menuItem) => {
      const details = menuItem.querySelector('.devmcee-mega-menu__sub-menu-details');

      menuItem.addEventListener('mouseover', () => {
        if (windowWidth > DESKTOP_WIDTH) details.open = true;
      });
      menuItem.addEventListener('mouseleave', () => {
        if (windowWidth > DESKTOP_WIDTH) details.open = false
      });
    });
  });
})();