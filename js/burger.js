const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
// const menuElemItem = document.querySelectorall('.menu-list__link');

const handlerMenu = (event) => {
    const target = event.target;
    if (target.matches('.menu-list__link')) {
        toggleMenu();
    }

}

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');

    if (menuElem.classList.contains('menu-active')) {
        document.body.addEventListener('click', handlerMenu)
    } else {
        document.body.removeEventListener('click', handlerMenu)
    }
}



humburgerElem.addEventListener('click', toggleMenu);

    