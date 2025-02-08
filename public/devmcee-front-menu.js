; (() => {
  const DESKTOP_WIDTH = 1024;
  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => windowWidth = window.innerWidth);
  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.devmcee-mega-menu__item-with-sub-menu');

    menuItems.forEach((menuItem) => {
      const details = menuItem.querySelector('.devmcee-mega-menu__sub-menu-details');
      const detailsContainer = menuItem.querySelector('.devmcee-mega-menu__sub-menu-container--inner');

      menuItem.addEventListener('mouseover', () => {
        if (windowWidth > DESKTOP_WIDTH) details.open = true;
      });
      
      menuItem.addEventListener('mouseleave', () => {
        if (windowWidth > DESKTOP_WIDTH) details.open = false;
      });

      detailsContainer.addEventListener('mouseleave', () => {
        setTimeout(() => {
          details.open = false;
        } , 0)
      });
    });
  });
})();