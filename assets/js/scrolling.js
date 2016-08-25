let timeoutId = null;
let listener = null;

/**
 * Takes an array of functions that should be executed when the page is scrolled.
 *
 * @param {function[]} funcArray
 **/
export function startToListenForScroll(funcArray, timeout) {
    listener = window.addEventListener('scroll', e => {
    if (timeoutId === null) {
        timeoutId = window.setTimeout(() => {
            funcArray.forEach(func => func(e));
            timeoutId = null;
        }, timeout);
    }
})
}

export function stopToListenForScroll() {
    window.removeEventListener('scroll', listener);
}