
const headerElement = document.querySelector('.header');

export function evaluateStickyHeader() {
    if (window.scrollY > 50) {
        makeHeaderSticky();
    } else {
        makeHeaderUnsticky();
    }
}

function makeHeaderSticky() {
    document.body.classList.add('--sticky');
    headerElement.classList.add('header--sticky');
}

function makeHeaderUnsticky() {
    document.body.classList.remove('--sticky');
    headerElement.classList.remove('header--sticky');
}