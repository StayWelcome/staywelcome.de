
const STICKY_STATE_CLASS = 'is-sticky';

const headerElement = document.querySelector('.header');
const pseudoHeaderElement = createPseudoHeaderElement();

function createPseudoHeaderElement() {
    const element = document.createElement('div');
    element.style.display = 'block';
    element.style.visibility = 'hídden';
    return element; 
}

export function evaluateStickyHeader() {
    if (window.scrollY > 75) {
        makeHeaderSticky();
    } else if (window.scrollY < 50) {
        makeHeaderUnsticky();
    }
}

function makeHeaderSticky() {
    if (!headerElement.classList.contains(STICKY_STATE_CLASS)) {
        pseudoHeaderElement.style.height = getAbsoluteHeight(headerElement) + 'px';
        headerElement.parentElement.insertBefore(pseudoHeaderElement, headerElement);
        headerElement.classList.add(STICKY_STATE_CLASS);
    }
}

function getAbsoluteHeight(el) {
  var styles = window.getComputedStyle(el);
  var spacing = parseFloat(styles['paddingTop']) +
                parseFloat(styles['paddingBottom']) +
                parseFloat(styles['marginTop']) +  
                parseFloat(styles['marginBottom']);

  return Math.ceil(el.offsetHeight + spacing);
}

function makeHeaderUnsticky() {
    if (headerElement.classList.contains(STICKY_STATE_CLASS)) {
        headerElement.parentElement.removeChild(pseudoHeaderElement);
        headerElement.classList.remove(STICKY_STATE_CLASS);
    }
}