const moreElem = document.querySelector('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden');
    document.body.style.overflow = "hidden";
    // disableScroll();
};

const closeModal = () => {
    modalElem.classList.add('hidden');
    // enableScroll();
    document.body.style.overflow = "";
};

moreElem.addEventListener('click', openModal);
modalElem.addEventListener('click', (event) => {
    const targer = event.target;
    if (targer.classList.contains('overlay') || targer.classList.contains('modal__close')) {
        closeModal();
    }
});